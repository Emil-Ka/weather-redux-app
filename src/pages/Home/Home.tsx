import {Header} from '../../components/Header';
import {BriefForecast} from '../../components/BriefForecast';
import {ForecastInfo} from '../../components/ForecastInfo';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
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