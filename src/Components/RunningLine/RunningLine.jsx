import React from 'react';
import Company1 from "../../Assets/Company1.png"
import Company2 from "../../Assets/Company2.png";
import Company3 from "../../Assets/Company3.png";
import Company4 from "../../Assets/Company4.png";
import styles from './RunningLine.module.css'; 
import '../Common/style.css';


const RunningLine = () => {
  return (
    <div>
      <div className={styles.logos}>
        <div className={styles.logos_slide}>
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
        </div>
      </div>

      <div className={styles.logos}>
        <div className={styles.logos_slide}>
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
          <img src={Company1} alt="Company1" />
          <img src={Company2} alt="Company2" />
          <img src={Company3} alt="Company3" />
          <img src={Company4} alt="Company4" />
        </div>
      </div>
    </div>
  );
}

export default RunningLine;
