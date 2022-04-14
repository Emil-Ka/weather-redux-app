import {Header} from '../../components/Header';
import {BriefForecast} from '../../components/BriefForecast';
import {ForecastInfo} from '../../components/ForecastInfo';
import {DaysForecast} from '../../components/DaysForecast';
import {Popup} from '../../components/Popup';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Popup/>
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles.oneDayInfo}>
          <BriefForecast/>
          <ForecastInfo/>
        </div>
        <DaysForecast/>
      </div>
    </div>
  )
}