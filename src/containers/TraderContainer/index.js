import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Trader from '../../components/Trader';
import { find } from 'lodash';

const TraderContainer = props => {
  const { symbol, cash, buyStock, sellStock, hasStock } = props;
  return <Trader
          symbol={symbol}
          cash={cash}
          buyStock={buyStock}
          sellStock={sellStock}
          hasStock={hasStock}
        />
}

const mapStateToProps = (state) => {
  return {
    symbol: state.symbol,
    cash: state.portfolio.cash,
    hasStock: find(state.portfolio.stocks, s => s.symbol === state.symbol.symbol) !== undefined
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TraderContainer);
