import {
  BUY_STOCK,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR,
  SELL_STOCK,
  SELL_STOCK_SUCCESS,
  SELL_STOCK_ERROR,
} from '../constants';

const mockStockData = [
  { symbol: 'F', name: 'Ford Motor', quantity: 20, pricePaid: [14.99] },
  { symbol: 'GE', name: 'General Electric', quantity: 10, pricePaid: [20] },
  { symbol: 'MSFT', name: 'Microsoft', quantity: 30, pricePaid: [24.99] },
];

const initialState = {
  cash: 100000,
  stocks: mockStockData
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
