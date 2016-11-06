import {
  LOOKUP_SYMBOL,
  LOOKUP_SYMBOL_SUCCESS,
  LOOKUP_SYMBOL_ERROR,
} from '../constants';

const mockData = {
  "symbol": "F",
  "dxSymbol": "F",
  "exchange": "XNYS",
  "isoExchange": "XNYS",
  "bzExchange": "NYSE",
  "type": "STOCK",
  "name": "Ford Motor",
  "description": "Ford Motor Company Common Stock",
  "sector": "Consumer Cyclical",
  "industry": "Auto Manufacturers",
  "open": 11.31,
  "high": 11.5,
  "low": 11.3,
  "close": 11.34,
  "bidPrice": 11.33,
  "askPrice": 11.37,
  "askSize": 1,
  "bidSize": 17,
  "size": 1204757,
  "bidTime": 1478304000000,
  "askTime": 1478304000000,
  "lastTradePrice": 11.34,
  "lastTradeTime": 1478289709000,
  "volume": 24752417,
  "change": -0.01,
  "changePercent": -0.09,
  "previousClosePrice": 11.35,
  "fiftyDayAveragePrice": 13.1472,
  "fiftyTwoWeekHigh": 15.84,
  "fiftyTwoWeekLow": 10.44,
  "marketCap": 44396100000,
  "sharesOutstanding": 3915000000,
  "pe": 5.632075,
  "forwardPE": 6.5232,
  "dividendYield": 5.03,
  "payoutRatio": 28.3,
  "ethPrice": 11.35,
  "ethVolume": 439550,
  "ethTime": 1478303644000
}

const initialState = process.env.NODE_ENV === 'development' ? mockData : {};

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
