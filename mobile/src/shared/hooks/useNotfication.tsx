import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from "react"
import * as Notifications from "expo-notifications"
import { router } from 'expo-router'
import { Platform } from 'react-native'

interface NotificationContextType {
  scheduleNotificationAsync: (
    request: Notifications.NotificationRequestInput
  ) => Promise<void>
  cancelNotificationAsync: () => Promise<void>
}

const NotificationsContext = createContext<NotificationContextType | undefined>(
  undefined
)

const NotificationsProvider: FC<PropsWithChildren> = ( { children } ) => {
  useEffect( () => {
    const configureNotificationsAsync = async () => {
      const { granted } = await Notifications.requestPermissionsAsync()
      if ( !granted ) {
        return console.warn( "⚠️ Notification Permissions not granted!" )
      }

      Notifications.setNotificationHandler( {
        handleNotification: async () => ( {
          shouldPlaySound: false,
          shouldSetBadge: false,
          shouldShowBanner: true,
          shouldShowList: true,
        } ),
      } )
      // Android: ensure channel exists
      if ( Platform.OS === "android" ) {
        await Notifications.setNotificationChannelAsync( "default", {
          name: "Default",
          importance: Notifications.AndroidImportance.MAX,
        } )
      }

      // 🔔 Listen for taps on notifications
      const responseListener =
        Notifications.addNotificationResponseReceivedListener( ( response ) => {
          const data = response.notification.request.content.data
          console.log( "📩 Notification tapped:", data )

          // Example: navigate if product info is provided
          if ( data?.product && typeof data.product === "string" ) {
            router.push( `./products/${data.product}` )
          }
        } )

      return () => {
        responseListener.remove()
      }
    }
    configureNotificationsAsync()
  }, [] )

  const scheduledNotificationRef = useRef<string>( "" )

  const scheduleNotificationAsync = async (
    request: Notifications.NotificationRequestInput
  ) => {
    const notification = await Notifications.scheduleNotificationAsync( request )
    scheduledNotificationRef.current = notification
    console.log(
      "✍️ Scheduling notification: ",
      scheduledNotificationRef.current
    )
  }

  const cancelNotificationAsync = async () => {
    console.log(
      "🗑️ Canceling notification: ",
      scheduledNotificationRef.current
    )
    await Notifications.cancelScheduledNotificationAsync(
      scheduledNotificationRef.current
    )
    scheduledNotificationRef.current = ""
  }

  const value = { scheduleNotificationAsync, cancelNotificationAsync }

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  )
}

const useNotifications = () => {
  const context = useContext( NotificationsContext )

  if ( !context ) {
    throw new Error(
      "useNotifications must be called from within a NotificationProvider!"
    )
  }

  return context
}

export { useNotifications, NotificationsProvider }
