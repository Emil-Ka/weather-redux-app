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

const time = new Date().getTime(); // get your number
const date = new Date(time);
const hours = date.getHours();
const minute = date.getMinutes();

console.log(time);
console.log(hours, minute);
console.log(date.toString()); // result: Wed Jan 12 2011 12:42:46 GMT-0800 (PST)