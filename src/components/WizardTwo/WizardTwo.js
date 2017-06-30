import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardTwo extends Component {
    render(){
        return(
            <div>
            
               In what city will the property be located?<br />
                
                    <input placeholder="city name" type="text" onChange={this.props.updateCity}/>
               
                <Link to="/wThree"><button > Next </button></Link>
            </div>
        )
    }
}

export default WizardTwo;