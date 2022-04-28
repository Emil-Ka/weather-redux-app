import {Dispatch} from 'redux';
import axios from 'axios';

import {getWeather} from '../../services/weather';
import {WeatherData} from '../types/weather';
import {WeatherActionType, WeatherFetchingAction, WeatherFetchedAction, WeatherFetchError, WeatherAction} from '../types/weather';

const API_KEY = 'db7a1757a03c431aea604f5b7ddbc58f';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (city: string = 'оймякон') => async (dispatch: Dispatch<WeatherAction>) => {
  dispatch(weatherFetching());
  getWeather(city)
    .then(data => dispatch(weatherFetched(data)))
    .catch(() => weatherFetchError());
};

const weatherFetching = (): WeatherFetchingAction => {
  return {
    type: WeatherActionType.WEATHER_FETCHING
  };
};

const weatherFetched = (data: any): WeatherFetchedAction => {
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

const weatherFetchError = (): WeatherFetchError => {
  return {
    type: WeatherActionType.WEATHER_FETCH_ERROR
  };
};