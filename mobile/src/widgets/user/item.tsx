import { User } from '@/entities'
import { Text, Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, Button } from '@/shared/ui'
import { View, type ViewProps } from 'react-native'

interface UserItemProps extends ViewProps, React.RefAttributes<View> {
  user: User
}

export const UserItem = ( { user, ...props }: UserItemProps ) => {
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
      <Button>
        <Text>
          Push notification
        </Text>
      </Button>
    </CardFooter>
  </Card>
  )
}
