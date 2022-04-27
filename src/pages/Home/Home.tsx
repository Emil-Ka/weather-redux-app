import {useEffect} from 'react';

import {Header} from '../../components/Header';
import {BriefForecast} from '../../components/BriefForecast';
import {ForecastInfo} from '../../components/ForecastInfo';
import {DaysForecast} from '../../components/DaysForecast';
import {Popup} from '../../components/Popup';
import {getWeather} from '../../services/weather';

import styles from './Home.module.scss';

export const Home = () => {
  

  useEffect(() => {
    logWeather();
  }, []);

  const logWeather = async () => {
    const data = await getWeather('moscow');
    console.log(data);
  }

  return (
    <div className={styles.home}>
      <Popup/>
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.oneDayInfo}>
          <BriefForecast/>
          <ForecastInfo/>
        </div>
      </div>
    </div>
  )
}