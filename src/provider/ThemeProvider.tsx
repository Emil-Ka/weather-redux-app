import {ReactNode, useState} from 'react';

import {ThemeContext} from '../context/ThemeContext';
import {themeConstants} from '../context/ThemeContext';
import {changeCssVariables} from '../model/changeCssVariables';
import {getThemeStorage, setThemeStorage} from '../model/localStorage';

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<themeConstants>(getThemeStorage() || themeConstants.LIGHT);

  changeCssVariables(theme);
  const changeTheme = (theme: themeConstants) => {
    setTheme(theme);
    setThemeStorage(theme);
    changeCssVariables(theme);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme
    }}
    {...props}>
      {children}
    </ThemeContext.Provider>
  )
}