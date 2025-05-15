import React, {useEffect} from 'react';
import plate from '../assets/plate.jpg';
import useTranslation from "../locale/useTranslation";

const Homepage = () => {
  const {t} = useTranslation();
  useEffect(() => {
    document.title = t('companyName') + ' - ' + t('home')
  }, [t]);
  return (
      <div>
        <img
            src={plate}
            alt="Plate"
            style={{
              width: '100%',
              display: 'block',
              objectPosition: 'top',
              objectFit: 'cover',
              height: '50vh', // Reduce the height further by 50%
              paddingBottom: '10%', // Add space at the bottom
            }}
        />
        <h2>Welcome to the Homepage</h2>
      </div>
  );
};

export default Homepage;