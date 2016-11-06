import React, { Component, PropTypes as P } from 'react';
import './index.css';

class SearchBar extends Component {
  search(e) {
    if (e.key === 'Enter') {
      this.props.search(e.nativeEvent.target.value);
    }
  }
  render() {
    return (
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search Stock Symbol..."
          onKeyPress={this.search.bind(this)}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: P.func.isRequired
}

export default SearchBar;
