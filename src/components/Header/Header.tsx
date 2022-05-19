import React, {useState, useEffect} from 'react';
import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';
import {useDispatch} from 'react-redux';

import {fetchWeather} from '../../redux/actions';
import {GlobalSvgSelector} from '../../assets/icons/global';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {themeConstants} from '../../redux/types/theme';
import {switchTheme} from '../../redux/actions'

import styles from './Header.module.scss';

export const Header = () => {
  const [city, setCity] = useState<string>('');
  const {weatherData} = useTypedSelector(state => state.weather);
  const {theme} = useTypedSelector(state => state.theme);
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(switchTheme());
  };

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  const onSendCityByKey = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      dispatch(fetchWeather(city));
    }
  };

  const onSendCityByClick = (): void => {
    dispatch(fetchWeather(city));
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <GlobalSvgSelector id="logo"/>
        <h1>React Weather</h1>
      </div>
      <div onClick={onChangeTheme} className={styles.themeBlock}>
        <GlobalSvgSelector id="change-theme"/>
      </div>
      <div className={styles.searchBlock}>
        <input 
          onChange={onChangeCity}
          onKeyDown={onSendCityByKey}
          type="text" 
          name="city" 
          placeholder="Введите город"
          value={city}/>
        <SearchIcon 
          onClick={onSendCityByClick}
          color={theme === themeConstants.LIGHT ? '#000' : '#fff'} 
          className={styles.searchIcon}/>
      </div>
    </header>
  )
}