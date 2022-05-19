import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {fetchWeather} from '../../redux/actions';
import {Header} from '../../components';
import {BriefForecast} from '../../components';
import {ForecastInfo} from '../../components';
import {DaysForecast} from '../../components';
import {Popup} from '../../components';
import {SkeletonBriefForecast} from '../../components';
import {SkeletonForecastInfo} from '../../components';
import {ErrorBlock} from '../../components';

import {getWeather} from '../../services/weather';

import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const {loading, error} = useTypedSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  const View = (): JSX.Element => {
    if (loading) {
      return (
        <>
          <div className={styles.briefForecast}>
            <SkeletonBriefForecast/>
          </div>
          <div className={styles.forecastInfo}>
            <SkeletonForecastInfo/>
          </div>
        </>
      );
    } else if (error) {
      return (
        <ErrorBlock errorMessage={error}/>
      );
    } else {
      return (
        <>
          <div className={styles.briefForecast}>
            <BriefForecast/>
          </div>
          <div className={styles.forecastInfo}>
            <ForecastInfo/>
          </div>
        </>
      )
    }
  }

  return (
    <div className={styles.home}>
      <Popup/>
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.oneDayInfo}>
          {View()}
        </div>
      </div>
    </div>
  )
}