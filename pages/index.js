import Main from '../components/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main />
    </div>
  )
}
