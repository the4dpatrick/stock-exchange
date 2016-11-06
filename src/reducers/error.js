import {
  LOOKUP_SYMBOL_ERROR,
  BUY_STOCK_ERROR,
  SELL_STOCK_ERROR,
  CLEAR_ERROR
} from '../constants';

const initialState = "App is using MockData because the API has a CORS issue";

export default function portfolio(state = initialState, action) {
  switch (action.type) {
    case LOOKUP_SYMBOL_ERROR:
    case BUY_STOCK_ERROR:
    case SELL_STOCK_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return "";
    default:
      return state;
  }
}
