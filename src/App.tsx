import {useEffect} from 'react';

import {Home} from './pages/Home';

import {changeCssVariables} from './model/changeCssVariables';
import {getStorage} from './model/localStorage';
import { themeConstants } from './redux/types/theme';

const App = () => {
  useEffect(() => {
    const theme = getStorage('theme') || themeConstants.LIGHT;
    changeCssVariables(theme);
  }, []);
  
  return (
    <Home/>
  );
}

export default App;
