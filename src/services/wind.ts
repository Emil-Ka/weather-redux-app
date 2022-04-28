export const scaleWindSpeed = (windSpeed: number): string => {
  if (windSpeed <= 5) {
    return 'легкий ветер';
  } else if (windSpeed <= 10) {
    return 'умеренный';
  } else {
    return 'сильный ветер';
  }
};

export const directionWind = (windDeg: number): string => {
  if (windDeg <= 10 || windDeg >= 350) {
    return 'север';
  } else if (windDeg > 10 || windDeg < 80) {
    return 'северо-восток';
  } else if (windDeg >= 80 || windDeg <= 100) {
    return 'восток';
  } else if (windDeg > 100 || windDeg < 170) {
    return 'юго-восток';
  } else if (windDeg >= 170 || windDeg <= 190) {
    return 'юг';
  } else if (windDeg > 190 || windDeg < 260) {
    return 'юго-запад';
  } else if (windDeg >= 260 || windDeg <= 280) {
    return 'запад';
  } else {
    return 'северо-запад';
  }
}