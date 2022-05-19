import {GlobalSvgSelector} from '../assets/icons/global';

export const getIcon = (icon: string): JSX.Element => {
  switch (icon.slice(0, -1)) {
    case '01':
      return <GlobalSvgSelector id="sun"/>;
    case '02':
      return <GlobalSvgSelector id="mainly"/>;
    case '03':
      return <GlobalSvgSelector id="mainly"/>;
    case '04':
      return <GlobalSvgSelector id="mainly"/>;
    case '09':
      return <GlobalSvgSelector id="small-rain"/>;
    case '10':
      return <GlobalSvgSelector id="rain-sun"/>;
    case '11':
      return <GlobalSvgSelector id="rain"/>;
    default:
      return <GlobalSvgSelector id="mainly"/>;
  }
};