import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Navbar.module.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isAuthenticated');
  const username = localStorage.getItem('userName') || localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <div className={styles.navbarSection}>
      <nav className={`navbar navbar-expand-sm ${styles.navbar}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Ecosphere Logo" className={styles.logo} />
          </Link>
          
          {/* Mobile Toggle Button */}
          <button 
            className={`navbar-toggler ${styles.navbarToggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
          </button>
          
          {/* Navbar Content */}
          <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="collapsibleNavbar">
            {/* Navigation Links */}
            <ul className={`navbar-nav ${styles.navbarNav}`}>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/artists">
                  Artists
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/library">
                  Library
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/subscription">
                  Upgrade
                </Link>
              </li>
            </ul>
            
            {/* Auth Buttons */}
            <div className={`${styles.iconGroup} ms-auto d-flex`}>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className={`btn btn-outline-light ${styles.btnOutlineLight}`}>
                    <i className="fas fa-user me-1"></i> 
                    {username || 'Profile'}
                  </Link>
                  <button 
                    className={`btn btn-outline-light ${styles.btnOutlineLight}`}
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i> 
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/" className={`btn btn-outline-light ${styles.btnOutlineLight}`}>
                  <i className="fas fa-user me-1"></i> 
                  Login & Signup
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;