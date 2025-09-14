import { ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'
import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import { NAV_THEME } from '@/shared/lib/theme'
import { useColorScheme } from 'react-native'
import '../global.css'
import { NotificationsProvider } from '@/shared/hooks'

const RootLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <NotificationsProvider>
      <ThemeProvider value={NAV_THEME[ colorScheme ?? 'dark' ]}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <PortalHost />
      </ThemeProvider>
    </NotificationsProvider>
  )
}

export default RootLayout
