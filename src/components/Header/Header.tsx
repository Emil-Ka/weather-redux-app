import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';

import {GlobalSvgSelector} from '../../assets/icons/global';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <GlobalSvgSelector id="logo"/>
        <h1>React Weather</h1>
      </div>
      <div className={styles.searchBlock}>
        <GlobalSvgSelector id="change-theme"/>
        <div>
          <input type="text" name="city" placeholder="Введите город"/>
          <SearchIcon className={styles.searchIcon}/>
        </div>
      </div>
    </header>
  )
}