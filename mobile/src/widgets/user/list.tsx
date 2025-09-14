import { View, type ViewProps } from 'react-native'
import { User } from '@/entities'
import React from 'react'
import { UserItem } from './item'
import { cn } from '@/shared/lib'

interface UserListProps extends ViewProps, React.RefAttributes<View> {
  users: User[]
}

export const UserList = ( { users, className, ...props }: UserListProps ) => {
  return (
    <View className={cn( 'flex flex-col gap-2 p-8', className )} {...props}>
      {users.map( ( user ) => ( <UserItem key={user.id} user={user} /> ) )}
    </View>
  )
}
