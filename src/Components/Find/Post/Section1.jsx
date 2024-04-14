import React from 'react';
import styles from './Section1.module.css'; 
import '../../Common/style.css'; 

const Section1 = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.PageSection}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h2 className={styles.h21}>Find a Job</h2>
                        <p className={styles.h21}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque quaerat, adipisci magnam suscipit impedit consequuntur voluptatum tempora eveniet quisquam quam vitae autem. Magnam minima adipisci velit perspiciatis sequi maxime?</p>
                        <button className={styles['btn-primary1']}>Post a featured job</button>
                    </div>
                    <div className={styles.column2}>
                        <h2 className={styles.h22}>Post a Job</h2>
                        <p className={styles.h22}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, facere ut mollitia quod dolore minima voluptatibus dolorum optio debitis eius ipsam repellat sed voluptas architecto maxime culpa iure atque assumenda!</p>
                        <button className={styles['btn-primary2']}>Post a free job</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
