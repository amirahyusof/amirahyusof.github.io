import React from 'react';
import styles from '../../src/css/Hero.module.css'

function Hero(){
    return(
        <div className={styles.heroSection}>
            <div>
            <h1 className={styles.heroHeader}>Hi, I'm Amirah</h1>
            <h2><span className={styles.heroTitle}>I'm front-end developer</span></h2>
            <p className={styles.heroIntro}>Reach me out if you'd want to know more</p>
            <button type='submit'className={styles.resumeButton}>Resume</button>
            </div>
            <div>
                <img src='' />
            </div>
            
        </div>
    )
}

export default Hero;