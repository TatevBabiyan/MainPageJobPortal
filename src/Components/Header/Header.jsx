import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
  return (
      <div className={styles.background}>
        <div className={styles.contentheader}>
          <h1>Jobs for Unemployed Youth No Experience? No Problem</h1>
          <p>Empowering Youth through No Experience Job Opportunities</p>
          <button>Find a Job</button>
          {/* --------------- Search Box ---------------- */}
            <div className={styles.search_container}>
              <div className="searchwrapper">
                <div className={styles.search_bar}>
                  <div className={styles.row}>
                    <div className={styles.col_md_5}><input type="text" className="form-control" placeholder="Search"></input></div>
                    <div className={styles.col_md_3}>
                      <select className="form-control category">
                        <option>Industry</option>
                        <option>Graphic Designer</option>
                        <option>Web Developer</option>
                        <option>Backend Developer</option>
                        <option>Frontend JS</option>
                      </select></div>
                    <div className={styles.col_md_3}>
                      <select className="form-control category">
                        <option>Location</option>
                        <option>Yerevan</option>
                        <option>Gyumri</option>
                        <option>Vanadzor</option>
                        <option>Hrazdan</option>
                      </select>
                    </div>
                    <div className={styles.col_md_1}>
                      <button className={styles.btn_primary}>Search</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Header;