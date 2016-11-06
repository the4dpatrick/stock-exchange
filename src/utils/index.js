import axios from 'axios';
const STOCK_DATA_API = 'http://data.benzinga.com/rest/richquoteDelayed?symbols=';

export function requestSymbol(symbol) {
  symbol = symbol.toUpperCase();

  return new Promise((resolve, reject) => {
    axios.get(`${STOCK_DATA_API}${symbol}`)
      .then(res => {
        if (res.data.null) {
          reject(res.data.null.error.message);
        } else {
          resolve(res.data[`${symbol}`])
        }
      })
      .catch(reject)
  });
}
