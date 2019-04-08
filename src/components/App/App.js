import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>{this.props.username}</code> and save to reload.
          </p>
          <button
            onClick={this.props.login}
          >
            LOGIN
          </button>
        </header>
      </div>
    );
  }
}

export default App