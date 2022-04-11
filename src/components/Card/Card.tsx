import {GlobalSvgSelector} from '../../assets/icons/global';

import styles from './Card.module.scss';

interface ICardProps {
  weekDay: string;
  date: string;
  temp: number;
  tempLike: number;
  weatherDesc: string;
}

export const Card = ({weekDay, date, temp, tempLike, weatherDesc}: ICardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.dayWeek}>{weekDay}</p>
      <p className={styles.date}>{date}</p>
      <GlobalSvgSelector id="rain-sun"/>
      <p className={styles.temp}>{temp > 0 ? `+${temp}` : temp}°</p>
      <p className={styles.tempLike}>{tempLike > 0 ? `+${tempLike}` : tempLike}°</p>
      <p className={styles.weatherDesc}>{weatherDesc}</p>
    </div>
  )
}