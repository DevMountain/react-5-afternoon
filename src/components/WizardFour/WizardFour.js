import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardFour extends Component {
    render(){
        return(
            <div>
            
               Have you already found your new home? <br />
                
                    <Link to="/wFive"><button onClick={this.props.foundTrue}>Yes</button></Link>
                    <Link to="/wFive"><button onClick={this.props.foundFalse}>No </button></Link>            

            </div>
        )
    }
}

export default WizardFour;