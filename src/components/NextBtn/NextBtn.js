import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NextBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bob Ross'
    };
  }

  render() {
    return(
      <div className="parent-div">
        <div className="vert-align">
          <p className="home-text">Home Loan Wizard</p> <br />
          <Link to="/wOne">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NextBtn;
