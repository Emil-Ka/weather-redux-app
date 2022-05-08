import React from 'react';

import styles from './SkeletonForecastInfo.module.scss';

export const SkeletonForecastInfo: React.FC = () => {
  const items: JSX.Element[] = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <li>
        <div className={styles.round}></div>
        <div className={styles.rectangle}></div>
      </li>
    );
  };

  return (
    <section className={styles.forecastInfo}>
      <ul>
        {items}
      </ul>
    </section>
  );
};