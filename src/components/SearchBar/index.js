import React, { Component, PropTypes as P } from 'react';
import './index.css';

class SearchBar extends Component {
  render() {
    return (
      <div id="search-bar">
        <input type="text" placeholder="Search Stock Symbol..." />
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: P.func.isRequired
}

export default SearchBar;
