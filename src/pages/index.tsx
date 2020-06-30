import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a>Next js sample!</a>
        </h1>
        <div>
          <Link href='/posts/old'>
            <a>to getInitialProps</a>
          </Link>
        </div>
      </main>
    </div >
  )
}

export default Home;
