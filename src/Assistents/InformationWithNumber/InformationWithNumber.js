import React from 'react';
import styles from './InformationWithNumber.module.css';

const InformationWithNumber = ({ color, number, main, complement }) => {
  const resultContainer = complement
    ? styles.containerWithComplement
    : styles.container;

  return (
    <div className={resultContainer}>
      <div className={styles.number}>
        <span style={{ background: color }}></span>
        <p>{number}</p>
      </div>

      <div className={styles.informations}>
        <p className={styles.main}>{main}</p>
        {complement && <p className={styles.complement}>{complement}</p>}
      </div>
    </div>
  );
};

export default InformationWithNumber;
