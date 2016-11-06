import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import { Link } from 'react-router';
import './index.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">The Exchange</Link>
      <SearchBarContainer />
    </div>
  )
}

export default Nav;
