import {Header} from '../../components/Header';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <Header/>
      </div>
    </div>
  )
}