import axios from 'axios'
import { GetServerSideProps } from 'next'
import { json } from 'stream/consumers'

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface RootObject {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

const User = ({ user }: { user: RootObject }) => {
  return <div>
    {JSON.stringify(user, null , 2)}
  </div>
}

export default User

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${context?.params?.id}`
  )
  return {
    props: {
      user: response.data,
    },
  }
}
