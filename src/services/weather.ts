import axios from 'axios';

const API_KEY = 'db7a1757a03c431aea604f5b7ddbc58f';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
  try {
    const {data} = await axios.get(`${url}?q=${city}&units=metric&appid=${API_KEY}&lang=ru`);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};