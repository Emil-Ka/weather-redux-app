import {useContext} from 'react';

import {ThemeContext} from '../context/ThemeContext'

//Кастомный хук, чтобы постоянно не писать useContext(ThemeContext)
export const useTheme = () => useContext(ThemeContext);