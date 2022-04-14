import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ThemeProvider} from './provider/ThemeProvider';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

