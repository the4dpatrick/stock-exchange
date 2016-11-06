import {
  BUY_STOCK,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR,
  SELL_STOCK,
  SELL_STOCK_SUCCESS,
  SELL_STOCK_ERROR
} from '../constants';
import { uniq, find, findIndex } from 'lodash';

export function buyStock(symbol, name, buyQuantity, bidPrice) {
  return (dispatch, getState) => {
    dispatch({ type: BUY_STOCK });

    const { portfolio } = getState();
    const { stocks: currentStocks, cash: currentCash } = portfolio;

    const newCash = currentCash - (buyQuantity*bidPrice);
    const hasOverspent = newCash < 0;
    if (hasOverspent) {
      return dispatch(buyStockError("Not enough cash for that buy order"));
    }

    let newStocks;
    const selectedStock = find(currentStocks, s => s.symbol);
    const hasStock = selectedStock !== undefined;
    if (hasStock) {
      const newQuantity = selectedStock.quantity + buyQuantity;
      const newPricePaid = uniq([...selectedStock.pricePaid, bidPrice]);
      const currentStockIndex = findIndex(currentStocks, s => selectedStock);
      newStocks = [
        ...currentStocks.slice(0,currentStockIndex),
        { ...selectedStock, quantity: newQuantity, pricePaid: newPricePaid },
        ...currentStocks.slice(currentStockIndex+1)
      ];
    } else {
      newStocks = [
        ...currentStocks,
        {
          symbol,
          name,
          quantity: buyQuantity,
          pricePaid: [bidPrice]
        }
      ];
    }
    localStorage.setItem('cash', JSON.stringify(newCash));
    localStorage.setItem('stocks', JSON.stringify(newStocks));
    dispatch(buyStockSuccess(newCash, newStocks))
  }
}

export function sellStock(symbol, sellQuantity, askPrice) {
  return (dispatch, getState) => {
    dispatch({ type: SELL_STOCK });

    const { portfolio } = getState();
    const { stocks: currentStocks, cash: currentCash } = portfolio;

    const selectedStock = find(currentStocks, s => s.symbol === symbol);
    const hasStock = selectedStock !== undefined;
    if (!hasStock) {
      return dispatch(sellStockError(`You don't own any ${symbol}`));
    }

    const currentQuantity = selectedStock.quantity;
    const hasOverSold = sellQuantity > currentQuantity;
    if (hasOverSold) {
      return dispatch(sellStockError(`You don't own that many of ${symbol}`))
    }

    const newCash = currentCash + (sellQuantity*askPrice);
    const newQuantity = currentQuantity - sellQuantity;
    let newStocks;
    if (newQuantity > 0) {
      const stockIndex = findIndex(currentStocks, s => s.symbol === symbol);
      newStocks = [
        ...currentStocks.slice(0, stockIndex),
        { ...selectedStock, quantity: newQuantity },
        ...currentStocks.slice(stockIndex+1),
      ]
    } else {
      newStocks = currentStocks.filter(s => s.symbol === symbol);
    }

    localStorage.setItem('cash', JSON.stringify(newCash));
    localStorage.setItem('stocks', JSON.stringify(newStocks));
    dispatch(sellStockSuccess(newCash, newStocks));
  }
}

function buyStockSuccess(cash, stocks) {
  return {
    type: BUY_STOCK_SUCCESS,
    payload: {
      cash,
      stocks
    }
  }
}

function buyStockError(err) {
  return {
    type: BUY_STOCK_ERROR,
    payload: err
  }
}

function sellStockSuccess(cash, stocks) {
  return {
    type: SELL_STOCK_SUCCESS,
    payload: {
      cash,
      stocks
    }
  }
}

function sellStockError(err) {
  return {
    type: SELL_STOCK_ERROR,
    payload: err
  }
}
