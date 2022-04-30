import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {fetchWeather} from '../../redux/actions';

import {Header} from '../../components/Header';
import {BriefForecast} from '../../components/BriefForecast';
import {ForecastInfo} from '../../components/ForecastInfo';
import {DaysForecast} from '../../components/DaysForecast';
import {Popup} from '../../components/Popup';
import {getWeather} from '../../services/weather';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

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