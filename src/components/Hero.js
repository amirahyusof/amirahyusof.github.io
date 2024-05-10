import React from 'react';
import landscape from './src/image/hero-section.jpg'
import styles from '../../src/css/Hero.module.css'

function Hero(){
    return(
        <div className="">
            <div>
                <img>{landscape}</img>  
                <img></img>
            <h1 className="">Amirah Yusof </h1>
            <p>Hey there, I'm Amirah Ezzamie Yusof, a self-taught Front-End Developer enthusiast turned aspiring web developer.
            With nearly two years od dedicated learning and project-building myself, I'm on a mission to bring ideas to life through captivating digital experiences.
            </p>
            <p>Currently, I'm diving into Firebase, PHP and MySQL, exploring new horizons and unlocking fresh possibilities beyond just code.
            Reach me out if you'd want to know more</p>
            <button>Amirah's Resume</button>
            <button>Contact</button>
            </div>
            <div>
                <img src='' />
            </div>
            
        </div>
    )
}

export default Hero;