import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={this.props.updateAddLineOne}/>
                    <input type="text" placeholder="Line Two" onChange={this.props.updateAddLineTwo}/>
                    <input type="text" placeholder="Line Three" onChange={this.props.updateAddLineThree}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

export default WizardNine;