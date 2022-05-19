import {Dispatch} from 'redux';

import {getWeather} from '../../services/weather';
import {WeatherData} from '../types/weather';
import {getStorage, setStorage} from '../../model/localStorage';
import {WeatherActionType, WeatherFetchingAction, WeatherFetchedAction, WeatherFetchError, WeatherAction} from '../types/weather';

const defaultCity: string = getStorage('city') || 'Москва';

export const fetchWeather = (city: string = defaultCity) => async (dispatch: Dispatch<WeatherAction>) => {
  dispatch(weatherFetching());
  getWeather(city)
    .then(data => dispatch(weatherFetched(data)))
    .catch((error: Error) => dispatch(weatherFetchError(error.message)));
};

const weatherFetching = (): WeatherFetchingAction => {
  return {
    type: WeatherActionType.WEATHER_FETCHING
  };
};

const weatherFetched = (data: any): WeatherFetchedAction => {
  setStorage('city', data.name);

  const weatherData: WeatherData = {
    city: data.name,
    description: data.weather[0].description,
    temp: Math.round(data.main.temp),
    feelTemp: Math.round(data.main.feels_like),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
    icon: data.weather[0].icon,
    time: data.dt
  }

  return {
    type: WeatherActionType.WEATHER_FETCHED,
    payload: weatherData
  };
};

const weatherFetchError = (errorMessage: string): WeatherFetchError => {
  return {
    type: WeatherActionType.WEATHER_FETCH_ERROR,
    payload: errorMessage
  };
};