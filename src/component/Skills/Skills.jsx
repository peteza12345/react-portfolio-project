import React from 'react'
import styles from './Skills.module.css'
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaHtml5 /></li>
            <li><FaCss3 /></li>
            <li><FaJs /></li>
            <li><FaReact /></li>
            <li><FaNodeJs /></li>
        </ul>
      
    </div>
  )
}

export default Skills
