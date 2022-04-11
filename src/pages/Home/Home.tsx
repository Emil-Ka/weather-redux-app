import {Header} from '../../components/Header';
import {BriefForecast} from '../../components/BriefForecast';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <Header/>
        <BriefForecast/>
      </div>
    </div>
  )
}