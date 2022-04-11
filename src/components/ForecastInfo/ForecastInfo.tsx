import {IndicatorsSvgSelector} from "../../assets/icons/indicators";

import styles from './ForecastInfo.module.scss';

export const ForecastInfo = () => {
  return (
    <section className={styles.forecastInfo}>
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
              <IndicatorsSvgSelector id="humidity"/>
            </div>
            <p className={styles.indicatorTitle}>Давление</p>
          </div>
          <p className={styles.weatherDesc}>765 мм ртутного столба - нормальное</p>
        </li>
        <li>
          <div className={styles.indicator}>
            <div className={styles.round}>
              <IndicatorsSvgSelector id="pressure"/>
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
    </section>
  )
}