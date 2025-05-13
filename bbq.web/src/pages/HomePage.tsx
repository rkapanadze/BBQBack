import React from 'react';
import plate from '../assets/plate.jpg';

const Homepage = () => {
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