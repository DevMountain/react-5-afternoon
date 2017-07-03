import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NextBtn extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p className="home-text">Home Loan Wizard</p> <br />
                    <Link to="/wOne" name={this.props.user}>
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NextBtn;