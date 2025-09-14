import { Tabs } from 'expo-router'
import { Icon } from '@/shared/ui'
import { CreditCard, Users } from 'lucide-react-native'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Users',
          tabBarIcon: ( { color } ) => <Icon as={Users} size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ( { color } ) => <Icon as={CreditCard} size={28} color={color} />,
        }}
      />
    </Tabs>
  )
}

export default _layout
