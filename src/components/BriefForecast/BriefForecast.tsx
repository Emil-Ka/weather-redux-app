import React from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getHoursMinute} from '../../services/time';
import {getIcon} from '../../services/iconWeather';

import styles from './BriefForecast.module.scss';

export const BriefForecast: React.FC = () => {
  const {weatherData, loading, error} = useTypedSelector(state => state.weather);

  return (
    <section className={styles.briefForecast}>
      <div className={styles.weatherInfo}>
        <div>
          <p className={styles.temp}>{weatherData.temp}°</p>
          {getIcon(weatherData.icon)}
        </div>
        <p className={styles.today}>{weatherData.description}</p>
      </div>
      <div className={styles.locationInfo}>
        <p>Время: {getHoursMinute()}</p>
        <p>Город: {weatherData.city}</p>
      </div>
    </section>
  )
}