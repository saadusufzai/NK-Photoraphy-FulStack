import React from 'react'
import Image from 'next/image'
import styles from './Equipment.module.css'
const Equipment = () => {
    return (
        <div className={styles.equipment}>
            <h1>Our Gems</h1>
            <div className={styles.grid}>
                <div className={styles.box}>
                    <Image
                     src="/assets/camera1.jpg"
                     alt="DSLR "
                     width={600}
                     height={410}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                     src="/assets/camera2.jpg"
                     alt="DSLR "
                     width={600}
                     height={410}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                     src="/assets/camera3.jpg"
                     alt="DSLR "
                     width={600}
                     height={410}
                    />
                </div>
            </div>
        </div>
    )
}

export default Equipment
