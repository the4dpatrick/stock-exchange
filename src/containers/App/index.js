import React, { Component } from 'react';
import './index.css';
import Nav from '../../components/Nav';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Nav />        
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
