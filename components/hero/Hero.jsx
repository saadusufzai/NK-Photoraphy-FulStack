import React from 'react'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.header}>
            <div className={styles.logo}><h3>NK Photography</h3></div>
            <ul className={styles.nav}>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Gallery</a>
                </li>
                <li>
                    <a href="">Booking</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                </ul>
        </div>
    </div>
  )
}

export default Hero
