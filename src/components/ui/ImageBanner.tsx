import React from 'react';
import styles from './ImageBanner.module.css';

const ImageBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
       <img 
          src="/Lady-stretching.png" 
          alt="Woman stretching outdoors against blue sky" 
          className={styles.image}
        />
    </div>
  );
};

export default ImageBanner;