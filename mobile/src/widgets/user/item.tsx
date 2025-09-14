import { User } from '@/entities'
import { Text, Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, Button } from '@/shared/ui'
import { View, type ViewProps } from 'react-native'
import * as Notifications from 'expo-notifications'
import { push_notifications } from '@/shared/lib'
import { useNotifications } from '@/shared/hooks'

interface UserItemProps extends ViewProps, React.RefAttributes<View> {
  user: User
}


export const UserItem = ( { user, ...props }: UserItemProps ) => {
  const { scheduleNotificationAsync } =
    useNotifications()
  const push_notification = push_notifications.find( ( p ) => p.client_code === user.id )

  if ( !push_notification ) {
    return (
      <Card {...props} >
        <CardHeader>
          <CardTitle>Пользователь не найден</CardTitle>
        </CardHeader>
      </Card>
    )
  }


  const sendNotification = () => {
    scheduleNotificationAsync( {
      content: {
        title: "BCC Bank",
        body: push_notification.push_notification,
        data: { product: push_notification.product },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
    } )
  }

  return ( <Card {...props} >
    <CardHeader>
      <CardTitle>{user.name}</CardTitle>
      <CardDescription>{user.status}</CardDescription>
    </CardHeader>
    <CardContent>
      <Text variant={'lead'}>Balance: {user.avg_monthly_balance_KZT} KZT</Text>
      <Text variant={'small'}>City: {user.city} | Age: {user.age}</Text>
    </CardContent>
    <CardFooter>
      <Button onPress={sendNotification}>
        <Text>
          Push notification
        </Text>
      </Button>
    </CardFooter>
  </Card>
  )
}
