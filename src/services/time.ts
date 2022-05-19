const getZero = (num: number): string => {
  if (num <= 9) {
    return `${0}${num}`;
  } else {
    return `${num}`;
  }
}

export const getHoursMinute = (): string => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${getZero(hours)}:${getZero(minutes)}`;
}