import { products } from '@/shared/lib'
import { Text } from '@/shared/ui'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Product = () => {
  const { name } = useLocalSearchParams<{ name: string }>()

  const item = products.find(
    ( p ) => p.name === name
  )

  if ( !item ) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-red-500">Продукт не найден</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <View className="p-4">
        <Text className="text-lg mb-2">
          {item.name}
        </Text>
        {item.features.map( ( f, i ) => (
          <Text
            key={i}
            className="text-sm mb-1"
          >
            • {f}
          </Text>
        ) )}
        <Text className="mt-2 text-xs">
          Подходит: {item.target_audience}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Product

