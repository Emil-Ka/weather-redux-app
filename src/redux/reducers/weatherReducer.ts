import {WeatherAction, WeatherActionType, WeatherState} from '../types/weather';

const initialState: WeatherState = {
  weatherData: {
    city: '',
    description: '',
    temp: null,
    feelTemp: null,
    pressure: 0,
    humidity: null,
    windSpeed: 0,
    windDeg: 0,
    icon: '',
    time: 0
  },
  loading: false,
  error: null
}

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionType.WEATHER_FETCHING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case WeatherActionType.WEATHER_FETCHED:
      return {
        ...state,
        loading: false,
        error: null,
        weatherData: action.payload
      };
    case WeatherActionType.WEATHER_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}