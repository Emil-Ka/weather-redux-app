import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';

import {GlobalSvgSelector} from '../../assets/icons/global';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <GlobalSvgSelector id="logo"/>
        <h1>React Weather</h1>
      </div>
      <div>
        <GlobalSvgSelector id="change-theme"/>
        <div>
          <input type="text" name="city"/>
          <SearchIcon className={styles.searchIcon}/>
        </div>
      </div>
    </header>
  )
}