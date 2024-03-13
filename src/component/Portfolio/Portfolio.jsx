import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'

function Portfolio() {
  return (
    <div className={styles.portfolio_con}>
        <div className={styles.portfolio_title}>Portfolio</div>
        <div className={styles.portfolio_list}>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
            <div className={styles.portfolio_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" width={300} height={270} />
                </Tilt>
                <p>Project title</p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
