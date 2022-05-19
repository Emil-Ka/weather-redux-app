import React from 'react';

import styles from './SkeletonBriefForecast.module.scss';

export const SkeletonBriefForecast: React.FC = () => {
  return (
    <section className={styles.briefForecast}>
      <div className={styles.row}>
        <div className={styles.square}></div>
        <div className={styles.round}></div>
      </div>
      <div className={styles.rectangle}></div>
      <div className={styles.line}></div>
      <div className={styles.longLine}></div>
    </section>
  );
};