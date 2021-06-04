import React from 'react';
import styles from './FinancialBonds.module.css';

import InformationWithNumber from '../../Assistents/InformationWithNumber/InformationWithNumber';

const FinancialBonds = () => (
  <section className={`${styles.container} item`}>
    <h2 className={styles.title}>Títulos financeiros</h2>

    <InformationWithNumber
      color="#C62828"
      number="1"
      main="R$ 3.105,00"
      complement="Vencidos"
    />

    <InformationWithNumber
      color="#FF6F00"
      number="2"
      main="R$ 3.105,00"
      complement="A vencer"
    />

    <InformationWithNumber
      color="#2E7D32"
      number="2"
      main="R$ 3.105,00"
      complement="Pagos"
    />
  </section>
);

export default FinancialBonds;
