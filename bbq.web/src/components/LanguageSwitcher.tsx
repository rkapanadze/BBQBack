import React from 'react';
import useTranslation from '../locale/useTranslation';

import enFlag from '../assets/gb.png';
import geFlag from '../assets/ge.png';

const LanguageSwitcher: React.FC = () => {
  const {locale, setLocale} = useTranslation();

  const nextLocale = locale === 'en' ? 'ge' : 'en';
  const flagSrc = nextLocale === 'en' ? enFlag : geFlag;
  const flagAlt = nextLocale === 'en' ? 'English' : 'Georgian';

  return (
      <img
          src={flagSrc}
          alt={flagAlt}
          onClick={() => {
            setLocale(nextLocale); // Update locale
            window.location.reload(); // Force page refresh
          }}
          style={styles.flag}
          title={`Switch to ${flagAlt}`}
      />
  );
};

const styles = {
  flag: {
    width: '30px',
    height: '20px',
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '3px',
  },
};

export default LanguageSwitcher;
