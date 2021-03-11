import Head from 'next/head'
import Navbar from '../comps/includes/Navbar'
import Footer from '../comps/includes/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="next.js" />
      </Head>
      <h1 className={styles.title}>
        Hello World...!
      </h1>
      <br />
      <p className={styles.text}>This is home page</p>
      <p className={styles.text} p>Check our projects</p>
      <Link href="/projects"><a className={styles.btn}><h3>Projects</h3></a></Link>

    </div>
  )
}
