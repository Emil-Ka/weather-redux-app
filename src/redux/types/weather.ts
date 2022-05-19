export interface WeatherState {
  weatherData: WeatherData
  loading: boolean;
  error: string | null;
};

export interface WeatherData {
  city: string;
  description: string;
  temp: number | null;
  feelTemp: number | null;
  pressure: number;
  humidity: number | null;
  windSpeed: number;
  windDeg: number;
  icon: string;
  time: number;
};

export enum WeatherActionType {
  WEATHER_FETCHING = 'WEATHER_FETCHING',
  WEATHER_FETCHED = 'WEATHER_FETCHED',
  WEATHER_FETCH_ERROR = 'WEATHER_FETCH_ERROR'
};

export interface WeatherFetchingAction {
  type: WeatherActionType.WEATHER_FETCHING;
};

export interface WeatherFetchedAction {
  type: WeatherActionType.WEATHER_FETCHED;
  payload: WeatherData;
};

export interface WeatherFetchError {
  type: WeatherActionType.WEATHER_FETCH_ERROR;
  payload: string;
};

export type WeatherAction = WeatherFetchingAction | WeatherFetchedAction | WeatherFetchError;