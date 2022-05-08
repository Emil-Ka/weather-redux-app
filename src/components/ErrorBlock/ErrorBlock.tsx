import React from 'react';

import sadEmoji from '../../assets/img/sad-emoji.png';

import styles from './ErrorBlock.module.scss';

interface ErrorBlockProps {
  errorMessage: string;
}

export const ErrorBlock: React.FC<ErrorBlockProps> = ({errorMessage}) => {
  let errorText: string = '';

  if (errorMessage.indexOf('404') !== -1) {
    errorText = 'Извините, но такой город не найден';
  }

  return (
    <section className={styles.errorBlock}>
      <h2 className={styles.title}>{errorText}</h2>
      <img className={styles.emoji} src={sadEmoji} alt="грустный эмодзи"/>
    </section>
  );
};