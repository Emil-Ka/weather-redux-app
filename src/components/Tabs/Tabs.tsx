import styles from './Tabs.module.scss';

export const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.dayTabs}>
        <div className={styles.tab}>
          <span>На неделю</span>
        </div>
        <div className={styles.tab}>
          <span>На месяц</span>
        </div>
        <div className={styles.tab}>
          <span>На 10 дней</span>
        </div>
      </div>
      <div className={styles.tab}>
        <span>Отменить</span>
      </div>
    </div>
  )
}