import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import PortfolioList from '../../components/PortfolioList';

const PortfolioListContainer = props => {
  return (
    <div>
      <PortfolioList portfolio={props.portfolio.stocks} />
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
