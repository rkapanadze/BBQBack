import React from 'react';


const Header: React.FC = () => {


  return (
      <header style={styles.header}>
        <img
            src='/logo.svg' // Logo image in public folder
            alt='Logo'
            style={styles.logo}
        />
      </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  logo: {
    cursor: 'pointer',
    width: '50px', // Adjust as needed
    height: '50px',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
};

export default Header;