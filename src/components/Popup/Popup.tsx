import cx from 'classnames';

import {GlobalSvgSelector} from '../../assets/icons/global';
import {IndicatorsSvgSelector} from '../../assets/icons/indicators';

import pressureIcon from '../../assets/img/barometer.png';

import styles from './Popup.module.scss';

export const Popup = () => {
  const active = false;
  return (
    <div className={cx(styles.background, {
      [styles.background_active]: active
    })}>
      <div className={styles.popup}>
        <div className={styles.closeIcon}>
          <GlobalSvgSelector id="close"/>
        </div>
        <div className={styles.popupInner}>
          <div className={styles.locationInfo}>
            <p className={styles.temp}>+21°</p>
            <p className={styles.dayWeek}>Сб</p>
            <GlobalSvgSelector id="rain-sun"/>
            <p className={styles.date}>21 авг</p>
            <p className={styles.city}>Город: Санкт-Петербург</p>
          </div>
          <ul className={styles.indicators}>
            <li>
              <div className={styles.indicator}>
                <div className={styles.round}>
                  <IndicatorsSvgSelector id="temp"/>
                </div>
                <p className={styles.indicatorTitle}>Температура</p>
              </div>
              <p className={styles.weatherDesc}>20° - ощущается как 17°</p>
            </li>
            <li>
              <div className={styles.indicator}>
                <div className={styles.round}>
                  <img src={pressureIcon} className={styles.pressureIcon} alt="pressure"/>
                </div>
                <p className={styles.indicatorTitle}>Давление</p>
              </div>
              <p className={styles.weatherDesc}>765 мм ртутного столба - нормальное</p>
            </li>
            <li>
              <div className={styles.indicator}>
                <div className={styles.round}>
                  <IndicatorsSvgSelector id="humidity"/>
                </div>
                <p className={styles.indicatorTitle}>Осадки</p>
              </div>
              <p className={styles.weatherDesc}>Без осадков</p>
            </li>
            <li>
              <div className={styles.indicator}>
                <div className={styles.round}>
                  <IndicatorsSvgSelector id="wind"/>
                </div>
                <p className={styles.indicatorTitle}>Ветер</p>
              </div>
              <p className={styles.weatherDesc}>3 м/с юго-запад - легкий ветер</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};