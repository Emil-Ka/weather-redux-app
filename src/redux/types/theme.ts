export enum themeConstants {
  LIGHT = 'light',
  DARK = 'dark'
};

export enum ThemeActionType {
  SWITCH_THEME = 'SWITCH_THEME'
}

export interface SwitchThemeType {
  type: 'SWITCH_THEME';
  payload: themeConstants;
};

export interface themeState {
  theme: themeConstants;
}