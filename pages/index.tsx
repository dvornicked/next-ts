import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Next TypeScript" />
        <link rel='icon' href='/favicon.ico' />
        <title>Create Next App</title>
      </Head>

      <h1>Hello</h1>
      <div>
        <Link href='/users'>Users</Link>
      </div>
    </div>
  )
}

export default Home
