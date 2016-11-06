import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import SearchBar from '../../components/SearchBar';

const SearchBarContainer = (props) => {
  const { lookupSymbol } = props;
  return <SearchBar search={lookupSymbol} />
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);
