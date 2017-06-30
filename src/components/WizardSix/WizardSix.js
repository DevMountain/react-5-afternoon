import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardSix extends Component {

    render(){
        return(
            <div>
                What is the estimated purchase price? <br />
                    
                    
                    <input type="text" placeholder="amount" onChange={this.props.updateCost}/> <br />


                How much are you putting down as a down payment? <br />
                    
                    
                    <input type="text" placeholder="amount" onChange={this.props.updateDownPayment}/>                    
                    
                
                <Link to="/wSeven"><button > Next </button></Link>
            </div>
        )
    }
}

export default WizardSix;