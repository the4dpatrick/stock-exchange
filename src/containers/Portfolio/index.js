import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../PortfolioListContainer';

const Portfolio = props => {
  return (
    <div>
      Your Portfolio
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
