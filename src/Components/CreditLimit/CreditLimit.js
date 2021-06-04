import React from 'react';
import styles from './CreditLimit.module.css';

const CreditLimit = () => (
  <section className={`${styles.container} item`}>
    <h2>Limite de crédito</h2>

    <div className={styles.total}>
      <p>R$ 12.000,20</p>
      <p>Concedido</p>
    </div>

    <div className={styles.available}>
      <p>R$ 3.105,00</p>
      <p>Disponível</p>
    </div>
  </section>
);

export default CreditLimit;
