import React from 'react';
import styles from './Opportunities.module.css';

import { ReactComponent as Information } from '../../Assets/information.svg';

import InformationWithNumber from '../../Assistents/InformationWithNumber/InformationWithNumber';

const Opportunities = () => {
  const [active, setActive] = React.useState(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <section className={`${styles.container} item`}>
      <h2 className={styles.title}>
        Oportunidades (7)
        <Information
          className={styles.icon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <p className={`${styles.help} ${active ? styles.active : ''}`}>
          Aqui está sendo exibido as 4 principais oportunidades.
        </p>
      </h2>

      <div className={styles.information}>
        <InformationWithNumber
          color="#2E7D32"
          number="4"
          main="Ganhas"
          complement="R$ 20.000,00"
        />

        <InformationWithNumber
          color="#C62828"
          number="1"
          main="Perdida"
          complement="R$ 4.300,00"
        />

        <InformationWithNumber
          color="#1976D2"
          number="2"
          main="Abertas"
          complement="Diversas moedas"
        />

        <InformationWithNumber
          color="#424242"
          number="0"
          main="Descartadas"
          complement="-"
        />
      </div>

      <a className={styles.viewMore}>VER TODAS AS OPORTUNIDADES</a>
    </section>
  );
};

export default Opportunities;
