import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Trader from '../../components/Trader';

const TraderContainer = props => {
  return <Trader symbol={props.symbol} />
}

const mapStateToProps = (state) => {
  return { symbol: state.symbol }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TraderContainer);
