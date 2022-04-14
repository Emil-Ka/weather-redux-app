import {themeConstants} from '../context/ThemeContext';

export const getThemeStorage = () => {
  const item = localStorage.getItem('theme');
  if (item) {
    return JSON.parse(item);
  }
};

export const setThemeStorage = (theme: themeConstants) => {
  localStorage.setItem('theme', JSON.stringify(theme));
};