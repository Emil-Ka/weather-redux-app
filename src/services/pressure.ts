export const calcPressure = (pressure: number): number => {
  return Math.round(pressure * 0.75);
};

export const scalePressure = (pressure: number): string => {
  if (pressure < 755) {
    return 'пониженное';
  } else if (pressure > 765) {
    return 'повышенное';
  } else {
    return 'нормальное';
  }
};