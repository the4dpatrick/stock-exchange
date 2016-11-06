import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../PortfolioListContainer';
import Trader from '../TraderContainer';
import './index.css';

class Symbol extends Component {
  componentWillMount() {
    this.props.lookupSymbol(this.props.params.symbol);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.symbol !== this.props.params.symbol) {
      this.props.lookupSymbol(nextProps.params.symbol);
    }
  }
  render() {
    const { symbol } = this.props;
    if (!Object.keys(symbol).length) return null;

    const divider = <div style={{flex: 0.1}}></div>;

    return (
      <div id="symbol">
        <h1>{symbol.name} ({symbol.symbol})</h1>
        <div className="symbol-content">
          <Trader />
          {divider}
          <PortfolioList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { symbol: state.symbol }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);
