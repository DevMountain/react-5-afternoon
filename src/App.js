import React, { Component } from 'react';
import './App.css';
import router from './router';
import { HashRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          { router }
        </HashRouter>
      </div>
    );
  }
}

export default App;
