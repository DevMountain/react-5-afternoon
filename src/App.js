import React, { Component } from 'react';
import './App.css';
import router from './router'
import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div>
    
      {router}

      </div>
    );
  }
}

function mapStateToProps(state){
  return{

      state

  }
}

export default connect(mapStateToProps)(App);

