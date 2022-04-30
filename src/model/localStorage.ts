export const getStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const setStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};