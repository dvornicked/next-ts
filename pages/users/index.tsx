import axios from 'axios'
import { GetStaticProps } from 'next'
import Link from 'next/link'

interface IUser {
  id: number
  name: string
}

interface UsersProps {
  users: IUser[]
}

const Users = ({ users }: UsersProps) => {
  return (
    <div>
      <Link href='/'>Main</Link>
      <div>Users</div>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Users

export const getStaticProps: GetStaticProps = async context => {
  const response = await axios.get<IUser[]>(
    'https://jsonplaceholder.typicode.com/users'
  )
  return {
    props: {
      users: response.data,
    },
  }
}
