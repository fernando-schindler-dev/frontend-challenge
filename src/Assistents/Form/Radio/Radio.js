import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ title, options, value, setValue, ...props }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>

    {options.map((option) => (
      <label key={option} className={styles.radio}>
        <input
          type="radio"
          value={option}
          checked={value === option}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />

        {option}
      </label>
    ))}
  </div>
);

export default Radio;
