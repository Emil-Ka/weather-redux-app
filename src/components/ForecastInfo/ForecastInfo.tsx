import React from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {calcPressure, scalePressure} from '../../services/pressure';
import {scaleWindSpeed, directionWind} from '../../services/wind';

import {IndicatorsSvgSelector} from "../../assets/icons/indicators";
import pressureIcon from '../../assets/img/barometer.png';

import styles from './ForecastInfo.module.scss';

export const ForecastInfo: React.FC = () => {
  const {weatherData, loading, error} = useTypedSelector(state => state.weather);

  const pressure = calcPressure(weatherData.pressure);

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
          <p className={styles.weatherDesc}>{weatherData.temp}° -  ощущается как {weatherData.feelTemp}°</p>
        </li>
        <li>
          <div className={styles.indicator}>
            <div className={styles.round}>
              <img src={pressureIcon} className={styles.pressureIcon} alt="pressure"/>
            </div>
            <p className={styles.indicatorTitle}>Давление</p>
          </div>
          <p className={styles.weatherDesc}>{pressure} мм ртутного столба - {scalePressure(pressure)}</p>
        </li>
        <li>
          <div className={styles.indicator}>
            <div className={styles.round}>
              <IndicatorsSvgSelector id="humidity"/>
            </div>
            <p className={styles.indicatorTitle}>Влажность</p>
          </div>
          <p className={styles.weatherDesc}>{weatherData.humidity}%</p>
        </li>
        <li>
          <div className={styles.indicator}>
            <div className={styles.round}>
              <IndicatorsSvgSelector id="wind"/>
            </div>
            <p className={styles.indicatorTitle}>Ветер</p>
          </div>
          <p className={styles.weatherDesc}>{Math.round(weatherData.windSpeed)} м/с  {directionWind(weatherData.windDeg)} - {scaleWindSpeed(weatherData.windSpeed)}</p>
        </li>
      </ul>
    </section>
  )
}