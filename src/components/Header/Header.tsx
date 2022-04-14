import {useState, useEffect} from 'react';
import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';

import {GlobalSvgSelector} from '../../assets/icons/global';
import {useTheme} from '../../hooks/useTheme';
import {themeConstants} from '../../context/ThemeContext';

import styles from './Header.module.scss';

export const Header = () => {
  const {theme, changeTheme} = useTheme();

  const onChangeTheme = () => {
    changeTheme(theme === themeConstants.LIGHT ? themeConstants.DARK : themeConstants.LIGHT);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <GlobalSvgSelector id="logo"/>
        <h1>React Weather</h1>
      </div>
      <div className={styles.searchBlock}>
        <div onClick={onChangeTheme}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <div>
          <input type="text" name="city" placeholder="Введите город"/>
          <SearchIcon 
            color={theme === themeConstants.LIGHT ? '#000' : '#fff'} 
            className={styles.searchIcon}/>
        </div>
      </div>
    </header>
  )
}