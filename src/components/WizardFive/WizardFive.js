import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardFive extends Component {

    render(){
        return(
            <div>

                Are you currently working with a real estate agent? <br />

                <Link to="/wSix"><button onClick={this.props.realEstateAgentTrue}>Yes</button></Link>
                <Link to="/wSix"><button onClick={this.props.realEstateAgentFalse}>No </button></Link>
                
            </div>
        )
    }
}

export default WizardFive;