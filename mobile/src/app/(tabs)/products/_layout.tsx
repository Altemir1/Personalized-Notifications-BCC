import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductsLayout = () => {
  return (
    <Stack screenOptions={
      {
        headerShown: false
      }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="[name]" options={{}} />
    </Stack >
  )
}

export default ProductsLayout

