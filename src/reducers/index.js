import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import error from './error';
import portfolio from './portfolio';
import symbol from './symbol';

const rootReducer = combineReducers({
  routing,
  error,
  portfolio,
  symbol
});

export default rootReducer;
