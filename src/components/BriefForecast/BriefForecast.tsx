import {GlobalSvgSelector} from '../../assets/icons/global';

import styles from './BriefForecast.module.scss';

export const BriefForecast = () => {
  return (
    <section className={styles.briefForecast}>
      <div className={styles.weatherInfo}>
        <div>
          <p className={styles.temp}>20°</p>
          <p className={styles.today}>Сегодня</p>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={styles.locationInfo}>
        <p>Время: 21:54</p>
        <p>Город: Санкт-Петербург</p>
      </div>
    </section>
  )
}