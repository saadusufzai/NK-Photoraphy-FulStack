import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact/ContactForm'
import Equipment from '../components/equipment/Equipment'
import Footer from '../components/footer/Footer'
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
      <Contact/>
      <Footer/>
    </div>
  )
}
