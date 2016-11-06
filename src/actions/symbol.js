import {
  LOOKUP_SYMBOL,
  LOOKUP_SYMBOL_SUCCESS,
  LOOKUP_SYMBOL_ERROR,
} from '../constants';
import { requestSymbol } from '../utils';
import { push } from 'react-router-redux';

export function lookupSymbol(symbol) {
  return dispatch => {
    dispatch({ type: LOOKUP_SYMBOL });
    requestSymbol(symbol)
      .then(symbol => {
        lookupSymbolSuccess(symbol);
        dispatch(push(`/symbol/${symbol}`));
      })
      .catch(lookupSymbolError)


  }
}

function lookupSymbolSuccess(symbol) {
  return {
    type: LOOKUP_SYMBOL_SUCCESS,
    payload: symbol
  }
}

function lookupSymbolError(err) {
  return {
    type: LOOKUP_SYMBOL_ERROR,
    payload: err
  }
}
