import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/images/logo.png';

const CompactFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <Link to="/" className={styles.footerLogo}>
                <img src={logo} alt="Ecosphere Logo" />
                <span>Ecosphere</span>
            </Link>
            
            <div className={styles.footerLinks}>
              <Link to="/about">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              &copy; {currentYear} Ecosphere. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompactFooter;