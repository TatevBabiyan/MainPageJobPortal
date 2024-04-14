import React from 'react';
import instagram from "../Assets/inst.png";    
import facebook from "../Assets/facebook.png"; 
import linkedin from "../Assets/linkedin.png";  
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.body1}>
      <div className={styles.footer}>
        <h1 class={styles.footer__logo}>Something</h1>

          <ul class={styles.footer__nav}>
            <li class={styles.nav__item}>
              <ul class={styles.nav__ul}>

                <li>
                  <a href="#">Adress</a>
                </li>

                <li>
                  <a href="#">E-Mail</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>


                <ul class={styles.nav__list}>
                  <li class={styles.nav__item}><a href="#"><img src={linkedin} alt="Linkedin"></img></a></li>
                  <li class={styles.nav__item}><a href="#"><img src={instagram} alt="instagram"></img></a></li>
                  <li class={styles.nav__item}><a href="#"><img src={facebook} alt="facebook"></img></a></li>
                </ul>

              </ul>
            </li>

          
            <li class={styles.nav__item}>
              <ul class={styles.nav__ul}>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                    
              </ul>
            </li>
            
            <li class={styles.nav__item}>
              <ul class={styles.nav__ul}>
                <li>
                  <a href="#">Browse Jobs</a>
                </li>

                <li>
                  <a href="#">Browse Companies</a>
                </li>

                <li>
                  <a href="#">Browse Jobseekers</a>
                </li>
                    
              </ul>
            </li>
            
            <li class={styles.nav__item}>
              <ul class={styles.nav__ul}>
                <li>
                  <a href="#">Freelance Jobs</a>
                </li>
                
                <li>
                  <a href="#">Fulltime Jobs</a>
                </li>
                
              </ul>
            </li>

            <li class={styles.nav__item}>
              <ul class={styles.nav__ul}>
                <li>
                  <span>&copy; 2024 Logo</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
  );
}

export default Footer;