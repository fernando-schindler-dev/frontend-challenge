import React from 'react';
import styles from './InformationWithImage.module.css';

const InformationWithImage = ({ image, main, complement }) => (
  <div className={styles.container}>
    <div className={styles.image}>{image}</div>

    <div className={styles.informations}>
      <p>{main}</p>
      <p>{complement}</p>
    </div>
  </div>
);

export default InformationWithImage;
