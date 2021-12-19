import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Js | Home</title>
        <meta name='keywords' content='Next Js' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat neque vel voluptas ab. Dolorem impedit iste, obcaecati et ex neque in quam repellat? Laborum adipisci iusto eveniet, delectus inventore sunt.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat neque vel voluptas ab. Dolorem impedit iste, obcaecati et ex neque in quam repellat? Laborum adipisci iusto eveniet, delectus inventore sunt.</p>

        <Link href="/explore">
          <a className={styles.btn}>Explore All</a>
        </Link>
      </div>
    </>
  )
}
