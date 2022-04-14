import {themeConstants} from '../context/ThemeContext';

export const changeCssVariables = (theme: themeConstants) => {
  const root = document.querySelector(':root') as HTMLElement;
  const components = [
    'body-background',
    'componenets-background',
    'card-background',
    'card-shadow',
    'text-color',
    'indicator-background'
  ]

  components.forEach(component => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
  })
}