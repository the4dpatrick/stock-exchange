import React, { Component } from 'react';
import './index.css';
import Nav from '../../components/Nav';
import Flash from '../FlashContainer';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Nav />
        <Flash />
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default App;
