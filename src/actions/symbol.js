import {
  LOOKUP_SYMBOL,
  LOOKUP_SYMBOL_SUCCESS,
  LOOKUP_SYMBOL_ERROR,
} from '../constants';
import { requestSymbol } from '../utils';

export function lookupSymbol(symbol) {
  return dispatch => {
    dispatch({ type: LOOKUP_SYMBOL });
    requestSymbol(symbol)
      .then(lookupSymbolSuccess)
      .catch(lookupSymbolError)
  }
}

function lookupSymbolSuccess(symbol) {
  return {
    type: LOOKUP_SYMBOL_SUCCESS,
    payload: symbol
  }
}

function lookupSymbolError() {
  return {
    type: LOOKUP_SYMBOL_ERROR
  }
}
