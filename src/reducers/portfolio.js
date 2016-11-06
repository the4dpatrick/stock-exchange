import {
  BUY_STOCK,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR,
  SELL_STOCK,
  SELL_STOCK_SUCCESS,
  SELL_STOCK_ERROR,
} from '../constants';

const initialState = {
  cash: 100000,
  stocks: []
}

export default function portfolio(state = initialState, action) {
  switch (action.type) {
    case BUY_STOCK_SUCCESS:
    case SELL_STOCK_SUCCESS:
      return Object.assign({}, state, action.payload);
    case BUY_STOCK:
    case SELL_STOCK:
    case BUY_STOCK_ERROR:
    case SELL_STOCK_ERROR:
    default:
      return state;
  }
}
