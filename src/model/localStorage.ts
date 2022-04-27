export const getThemeStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const setThemeStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};