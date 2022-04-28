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
  error: false
}

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionType.WEATHER_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case WeatherActionType.WEATHER_FETCHED:
      return {
        ...state,
        loading: false,
        weatherData: action.payload
      };
    case WeatherActionType.WEATHER_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}