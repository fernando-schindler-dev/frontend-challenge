import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, setOpen }) => (
  <button className={styles.button} onClick={(anterior) => setOpen(!anterior)}>
    {text}
  </button>
);

export default Button;
