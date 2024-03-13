import React from 'react'
import styles from './Hero.module.css'
import {FaGithub, FaSquareFacebook, FaEnvelope, FaLine} from "react-icons/fa6"
import {TypeAnimation} from 'react-type-animation'
import Tilt from 'react-parallax-tilt';
import img1 from './Images/myphoto.jpg.jpg'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.hero_container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <h4 className={styles.text_1}>Hi, it’s me</h4>
                    <h3 className={styles.text_2}>Nobphasin Chueamak</h3>
                    <h4 className={styles.text_3}>
                        <span style={{ marginRight:'10px' }}>I’m a</span> 
                        <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front-end Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                           
                          ]}
                          speed={50}
                          repeat={Infinity}
                        />
                    </h4>
                    <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</p>
                    <ul className={styles.social}>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a target='_blank' href="https://web.facebook.com/profile.php?id=100009624962687"><FaSquareFacebook color='#0085ff'/></a></li>
                        <li><a href="#"><FaEnvelope /></a></li>
                        <li><a href="#"><FaLine color='green'/></a></li>
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.hero_img}><img src={img1} alt="" /></div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Hero
