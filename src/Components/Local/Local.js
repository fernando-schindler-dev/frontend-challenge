import React from 'react';
import styles from './Local.module.css';

import { ReactComponent as Map } from '../../Assets/map.svg';

import InformationWithImage from '../../Assistents/InformationWithImage/InformationWithImage';

const Local = () => (
  <section className={`${styles.container} item`}>
    <h2>Local</h2>

    <div className={styles.image}></div>

    <InformationWithImage
      image={<Map />}
      main="Avenida Brasil, 4019"
      complement="Trabalho"
    />
  </section>
);

export default Local;
