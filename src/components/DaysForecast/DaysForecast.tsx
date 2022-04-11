import {Tabs} from '../Tabs';
import {Card} from '../Card';

import styles from './DaysForecast.module.scss';

export const DaysForecast = () => {
  return (
    <section>
      <Tabs/>
      <div className={styles.cards}>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
        <Card
          weekDay='Сегодня'
          date='18 авг'
          temp={18}
          tempLike={15}
          weatherDesc='Облачно'/>
      </div>
    </section>
  );
};