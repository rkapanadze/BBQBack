import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useTranslation from '../locale/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);
  const location = useLocation();  // Get the current location

  return (
      <header style={styles.header}>
        <Link to="/" style={styles.logoWrapper}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>

        <nav style={styles.nav}>
          <Link
              to="/"
              style={location.pathname === '/' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            {t('home')}
          </Link>
          <Link
              to="/menu"
              style={location.pathname === '/menu' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            {t('menu')}
          </Link>
          <Link
              to="/sauces-and-rubs"
              style={location.pathname === '/sauces-and-rubs' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            {t('sauces rubs')}
          </Link>
          <Link
              to="/merch"
              style={location.pathname === '/merch' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            {t('merch')}
          </Link>
          <Link
              to="/about"
              style={location.pathname === '/about' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            {t('about')}
          </Link>
        </nav>

        <div style={styles.rightSection}>
          <Link
              to="/order"
              style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
          >
            {t('orderInAdvance')}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f9f5e3',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eaeaea',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '0rem',
    marginLeft: '7rem',
    textDecoration: 'none',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'color 0.3s ease',
    padding: '0.5rem',  // Ensure consistent padding
    display: 'inline-block',  // Prevent layout shift on hover
  },
  activeLink: {
    color: '#f68d2e',  // Highlight active link with orange color
    fontWeight: 'bold', // Make active link bold for emphasis
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minWidth: '100px',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#f68d2e',
    color: '#fff',
    padding: '0.5rem 1.25rem',
    borderRadius: '25px',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#e05d20',
  },
};

export default Header;