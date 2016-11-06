import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../../components/PortfolioList';
import { moneyFormat } from '../../utils';
import './index.css';

const PortfolioListContainer = props => {
  const { cash, stocks } = props.portfolio;

  return (
    <div className="portfolio-list-container">
      <div className="portfolio-list-container-text">
        <div>Current Portfolio</div>
        <div>Cash: {moneyFormat(cash)}</div>
      </div>

      <PortfolioList portfolio={stocks} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { portfolio: state.portfolio };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioListContainer);
