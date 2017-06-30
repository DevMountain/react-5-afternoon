import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardSeven extends Component {

    render(){
        return(
            <div>
                Estimate your credit score <br />

                <Link to="/wEight"><button onClick={this.props.updateCreditE}>Excellent</button></Link>
                <Link to="/wEight"><button onClick={this.props.updateCreditG}>Good</button></Link>
                <Link to="/wEight"><button onClick={this.props.updateCreditF}>Fair</button></Link>
                <Link to="/wEight"><button onClick={this.props.updateCreditP}>Poor</button></Link>
                
            </div>
        )
    }
}

export default WizardSeven;