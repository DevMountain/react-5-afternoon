import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={this.props.updateFirst}/>
                    <input type="text" placeholder="Last Name" onChange= {this.props.updateLast}/>
                    <input type="text" placeholder="email" onChange={this.props.updateEmail}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
export default WizardTen;