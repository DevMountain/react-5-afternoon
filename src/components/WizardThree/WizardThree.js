import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardThree extends Component {
    render(){
        return(
            <div>
                What property are you looking to use the loan on? <br />
                <Link to="/wFour"><button value="primaryHome" onClick={this.props.propToBeUsedOn}>Primary Home</button></Link>
                <Link to="/wFour"><button value="rentalProperty" onClick={this.props.propToBeUsedOn}>Rental Property</button></Link>
                <Link to="/wFour"><button value="secondaryHome" onClick={this.props.propToBeUsedOn}>Secondary Home</button></Link>
                               
            </div>
        )
    }
}

export default WizardThree; 