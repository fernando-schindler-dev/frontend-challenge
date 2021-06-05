import React from 'react';
import styles from './Local.module.css';

import { ReactComponent as Map } from '../../Assets/map.svg';

import InformationWithImage from '../../Assistents/InformationWithImage/InformationWithImage';
import Loading from '../../Assistents/Loading/Loading';

const Maps = React.lazy(() => import('../../Assistents/Maps/Maps'));

const Local = () => (
  <section className={`${styles.container} item`}>
    <h2>Local</h2>

    <React.Suspense fallback={<Loading />}>
      <Maps />
    </React.Suspense>

    <InformationWithImage
      image={<Map />}
      main="Avenida Brasil, 4019"
      complement="Trabalho"
    />
  </section>
);

export default Local;
