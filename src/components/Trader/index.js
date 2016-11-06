import React, { Component, PropTypes as P } from 'react';
import './index.css';
import { moneyFormat } from '../../utils';
import BidAskTable from '../BidAskTable';

class Trader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }
    this.buyStock = this.buyStock.bind(this);
    this.sellStock = this.sellStock.bind(this);
  }
  buyStock() {
    const { symbol, name, bidPrice } = this.props.symbol;
    this.props.buyStock(symbol, name, this.state.quantity, bidPrice);
  }
  sellStock() {
    const { symbol, askPrice } = this.props.symbol;
    this.props.sellStock(symbol, this.state.quantity, askPrice);
  }
  render() {
    const { symbol, cash, hasStock } = this.props;
    const { quantity } = this.state;
    const hasCash = cash > 0;

    let liveTotalElement;
    if (quantity > 0) {
      const buyTotal = quantity * symbol.bidPrice;
      const sellTotal = quantity * symbol.askPrice;
      const buyTotalElement = hasCash ? (
        <div>
          Cash After Buy: {moneyFormat(cash-buyTotal)}
        </div>
      ) : null;
      const sellTotalElement = hasStock ? (
        <div>
          Cash After Sell: {moneyFormat(cash+sellTotal)}
        </div>
      )  : null;
      liveTotalElement = (
        <div>
          {buyTotalElement}
          {sellTotalElement}
        </div>
      )
    }

    const buyButton = hasCash ? <button onClick={this.buyStock}>Buy</button> : null;
    const sellButton = hasStock ? <button onClick={this.sellStock}>Sell</button> : null;

    return (
      <div id="trader">
        <BidAskTable bidPrice={symbol.bidPrice} askPrice={symbol.askPrice} />
        <div>
          <div>
            <input
              type="text"
              placeholder="Quantity"
              onChange={(e) => this.setState({ quantity: Number(e.target.value) })}
            />
            Shares
          </div>
          {buyButton}
          {sellButton}
        </div>
        {liveTotalElement}
      </div>
    )
  }
}

Trader.propTypes = {
  symbol: P.object.isRequired,
  cash: P.number.isRequired,
  buyStock: P.func.isRequired,
  sellStock: P.func.isRequired,
  hasStock: P.bool.isRequired
}

export default Trader;
