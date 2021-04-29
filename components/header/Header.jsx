import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}><h3>NK Photography</h3></div>
            <ul>
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
    )
}

export default Header
