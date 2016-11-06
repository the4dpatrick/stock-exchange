import {
  BUY_STOCK,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR,
  SELL_STOCK,
  SELL_STOCK_SUCCESS,
  SELL_STOCK_ERROR
} from '../constants';

export function buyStock(symbol, quantity) {
  return dispatch => {
    dispatch({ type: BUY_STOCK });
    // TODO: error case - overspending cash (negative balance)
  }
}

export function sellStock(symbol, quantity) {
  return dispatch => {
    dispatch({ type: SELL_STOCK });
    // TODO: error case - sell more shares than available in portfolio
  }
}

function buyStockSuccess() {
  return {
    type: BUY_STOCK_SUCCESS
  }
}

function buyStockError() {
  return {
    type: BUY_STOCK_ERROR
  }
}

function sellStockSuccess() {
  return {
    type: SELL_STOCK_SUCCESS
  }
}

function sellStockError() {
  return {
    type: SELL_STOCK_ERROR
  }
}
