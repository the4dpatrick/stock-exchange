import React from 'react';
import Flash from '../../components/Flash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

const FlashContainer = props => {
  const { error, clearError } = props;
  if (!error) return null;
  return <Flash error={error} close={clearError} />
}

const mapStateToProps = (state) => {
  return { error: state.error };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer);
