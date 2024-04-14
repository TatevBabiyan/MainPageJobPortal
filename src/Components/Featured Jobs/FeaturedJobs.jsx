import React from 'react';
import Frame34 from "../../Assets/Frame34.png";
import Frame341 from "../../Assets/Frame 34.png";
import Frame342 from "../../Assets/Frame 342.png";
import Frame343 from "../../Assets/Frame 343.png";
import Frame345 from "../../Assets/Frame 345.png";
import styles from './FeaturedJobs.module.css'; 
import '../Common/style.css';



const FeaturedJobs = () => {
    return (
        <div className={styles.features}>
            <h2>Featured Jobs</h2>
            <div className={styles.container3}>
                <JobBox
                    imgSrc={Frame34}
                    title="Web Developer"
                    company="Google"
                />
                <JobBox
                    imgSrc={Frame341}
                    title="UX Designer"
                    company="UI Meta"
                />
                <JobBox
                    imgSrc={Frame342}
                    title="UX Designer"
                    company="Figma"
                />
                <JobBox
                    imgSrc={Frame343}
                    title="IU Designer"
                    company="Microsoft"
                />
                <JobBox
                    imgSrc={Frame345}
                    title="Web Developer"
                    company="Twitter"
                />
                <JobBox
                    imgSrc={Frame34}
                    title="UX Designer"
                    company="Google"
                />
            </div>
            <i className="fas fa-ellipsis-h"></i>
            <div className={styles.btn_container}>
                <button className={styles.btnmain}>Show more Jobs</button>
            </div>
        </div>
    );
}

const JobBox = ({ imgSrc, title, company }) => {
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={imgSrc} alt="Logo1" />
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <h5>{company}</h5>
                    </div>
                    <h5 className={styles['button-17']}>Fulltime</h5>
                    <h5 className={styles['button-17']}>Expert</h5>
                    <h5 className={styles['button-17']}>Remote</h5>
                    <p><hr /></p>
                    <small>$32k/month</small>
                </div>
            </div>
        </div>
    );
}

export default FeaturedJobs;
