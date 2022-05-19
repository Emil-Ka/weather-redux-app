import {store} from '../store';
import {ThemeActionType, SwitchThemeType, themeConstants} from '../types/theme';

import {changeCssVariables} from '../../model/changeCssVariables';
import {setStorage} from '../../model/localStorage';

export const switchTheme = (): SwitchThemeType => {
  const {theme: {theme}} = store.getState();
  const newTheme = theme === themeConstants.LIGHT ? themeConstants.DARK : themeConstants.LIGHT;

  changeCssVariables(newTheme);
  setStorage('theme', newTheme);

  return {
    type: ThemeActionType.SWITCH_THEME,
    payload: newTheme
  };
};