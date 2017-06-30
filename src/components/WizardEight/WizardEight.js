import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardEight extends Component {

    render(){
        return(
            <div>
                Have you had a bankruptcy or foreclosure in the past seven years? <br />

                <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={this.props.updateHistory}>No</button></Link>
                <Link to="/wNine"><button value="Has had bankruptcy before" onClick={this.props.updateHistory}>Bankruptcy</button></Link>
                <Link to="/wNine"><button value="Has had a foreclosure before" onClick={this.props.updateHistory}>Foreclosure</button></Link>
                <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={this.props.updateHistory}>Both</button></Link>
                
            </div>
        )
    }
}

export default WizardEight;