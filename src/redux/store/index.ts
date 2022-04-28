import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from '../reducers/index';

const devTool = 'window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));