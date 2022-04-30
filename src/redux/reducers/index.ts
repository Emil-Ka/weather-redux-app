import {combineReducers} from 'redux';

import {weatherReducer} from './weatherReducer';
import {themeReducer} from './themeReducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer
});

export type RootState = ReturnType<typeof rootReducer>