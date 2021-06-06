import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, setValue, ...props }) => (
  <div className={styles.container}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input
      className={styles.input}
      id={id}
      name={id}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  </div>
);

export default Input;
