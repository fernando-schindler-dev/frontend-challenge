import React from 'react';
import styles from './ActivityItem.module.css';

const ActivityItem = ({ image, title, name, date }) => (
  <div className={styles.container}>
    {image}

    <div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.name}>{name}</p>
      <p className={styles.date}>{date}</p>
    </div>
  </div>
);

export default ActivityItem;
