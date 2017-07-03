import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class Finish extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                   

                    <p>Thank you for submitting your application, and loan consultant will be in touch with you shortly.</p>

                    <Link to="/"><button className="margin-btn"> Home </button></Link>
                </div>
            </div>
        )
    }
}
export default Finish;