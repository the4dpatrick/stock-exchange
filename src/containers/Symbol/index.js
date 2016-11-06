import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../PortfolioListContainer';
import Trader from '../TraderContainer';

const Symbol = props => {
  const { symbol, buyStock, sellStock } = props;
  return (
    <div>
      Symbol
      <Trader />
      <PortfolioList />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { symbol: state.symbol }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);
