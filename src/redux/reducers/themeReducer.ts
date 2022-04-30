import {themeConstants, SwitchThemeType, ThemeActionType, themeState} from '../types/theme';
import {getStorage} from '../../model/localStorage';

const initialState: themeState = {
  theme: getStorage('theme') || themeConstants.LIGHT
};

export const themeReducer = (state = initialState, action: SwitchThemeType): themeState => {
  switch (action.type) {
    case ThemeActionType.SWITCH_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}