import React from 'react';
import styles from './InformationWithNumber.module.css';

const InformationWithNumber = (props) => (
  <div className={styles.container}>
    <div className={styles.number} style={{ background: props.color }}>
      {props.number}
    </div>

    <div className={styles.informations}>
      <p>{props.main}</p>
      <p>{props.complement}</p>
    </div>
  </div>
);

export default InformationWithNumber;
