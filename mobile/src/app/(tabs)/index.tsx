import { users } from '@/shared/lib'
import { UserList } from '@/widgets/user'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Users = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <UserList users={users} />
      </ScrollView >
    </SafeAreaView >
  )
}


export default Users
