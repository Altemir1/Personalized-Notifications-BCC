import { ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { NAV_THEME } from '@/shared/lib/theme'
import { useColorScheme } from 'react-native'
import '../global.css'

const RootLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={NAV_THEME[ colorScheme ?? 'dark' ]}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  )
}

export default RootLayout
