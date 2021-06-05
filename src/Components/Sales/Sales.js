import React from 'react';
import Loading from '../../Assistents/Loading/Loading';
import styles from './Sales.module.css';

const Graph = React.lazy(() => import('../../Assistents/Graph/Graph'));

const Sales = () => (
  <section className={`${styles.container} item`}>
    <h2>Vendas</h2>

    <React.Suspense fallback={<Loading />}>
      <Graph />
    </React.Suspense>
  </section>
);

export default Sales;
