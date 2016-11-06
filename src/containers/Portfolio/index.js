import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../PortfolioListContainer';
import './index.css';

const Portfolio = props => {
  return (
    <div id="portfolio">
      <h1>Your Portfolio</h1>
      <PortfolioList />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
