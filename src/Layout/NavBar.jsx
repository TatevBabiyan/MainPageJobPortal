import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      {/* --------------- Navigation Bar ---------------- */}
      <header className={styles.header}>
        <div className={styles.flex}>
          <a className={styles.Logo}>Logo</a>
          <nav className={styles.navbar}>
            <a href=""><i className="fas fa-home"></i> Home</a>
            <a href=""><i className="fas fa-search"></i> Find Jobs</a>
            <a href=""><i className="fas fa-building"></i> Companies</a>
            <a href=""><i className="fas fa-newspaper"></i> Blog</a>
            <a href=""><i className="fas fa-file-alt"></i> Resume Builder</a>
          </nav>
          <a href="#" className={styles.btn}>Login</a>
        </div>
      </header>
  </div>
  );
}

export default NavBar;