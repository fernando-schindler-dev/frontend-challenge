import React from 'react';
import styles from './ActivitiesTitle.module.css';

const ActivitiesTitle = ({ color, title }) => (
  <div className={styles.container}>
    <span className={styles.circle} style={{ background: color }}></span>
    <h3 className={styles.title}>{title}</h3>
  </div>
);

export default ActivitiesTitle;
