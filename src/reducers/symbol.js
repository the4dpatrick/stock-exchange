import {
  LOOKUP_SYMBOL,
  LOOKUP_SYMBOL_SUCCESS,
  LOOKUP_SYMBOL_ERROR,
} from '../constants';

const initialState = {};

export default function portfolio(state = initialState, action) {
  switch (action.type) {
    case LOOKUP_SYMBOL_SUCCESS:
      return action.payload;
    case LOOKUP_SYMBOL_ERROR:
      return initialState;
    case LOOKUP_SYMBOL:
    default:
      return state;
  }
}
