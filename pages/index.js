import Head from 'next/head'
import Image from 'next/image'
import Equipment from '../components/equipment/Equipment'
import Media from '../components/gallery/Media'
import Hero from '../components/hero/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NK Photography</title>
        <meta name="description" content="NK Photography Australia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Media/>
      <Equipment/>
    </div>
  )
}
