import {createContext} from "react";

interface ContextProps {
  theme: themeConstants;
  changeTheme: (theme: themeConstants) => void;
}

export enum themeConstants {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeContext = createContext<ContextProps>({
  theme: themeConstants.LIGHT,
  changeTheme: () => {}
})