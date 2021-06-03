import React from 'react';
import styles from './MenuList.module.css';

const MenuList = () => (
  <nav className={styles.container}>
    <button className={styles.menu}>
      <span className={styles.line}></span>
    </button>
  </nav>
);

export default MenuList;
