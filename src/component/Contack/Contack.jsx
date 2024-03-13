import React from 'react'
import styles from './Contack.module.css'
import {FaPhone, FaEnvelope} from 'react-icons/fa6'

function Contack() {
  return (
    <div className={styles.contack_wrapper}>
        <div className={styles.contack_con}>
            <div className={styles.contack_info}>
                <h3>Get in touch</h3>
                <p className={styles.contack_desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.</p>
                <p className={styles.contack_address}>123 Main Street <br />Bangkok, Thailand</p>
                <p><FaPhone />(+66) 98 555 1234</p>
                <p><FaEnvelope />pete-e-2012@hotmali.com</p>
            </div>
            <div className={styles.contack_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='Nobphasis'/>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='Chueamak'/>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='pete-e-2012@hotmail.com'/>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type Here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contack
