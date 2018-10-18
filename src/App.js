import React, { Component } from 'react';
import './App.css';
import People from './container/People/People';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <People/>
        </header>
      </div>
    );
  }
}

export default App;
