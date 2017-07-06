import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardEleven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                      
                    <p>Here is an over view of your form:</p> 

                    <div>
                        <div className="overarching-div">
                            <div className="form">Name: 
                                <p className="p2">
                                    {this.props.firstName} {this.props.lastName}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Email: 
                                <p className="p2">
                                    {this.props.email} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">What type of loan will you be needing?: 
                                <p className="p2">
                                    {this.props.loanType} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">What type of property are you purchasing?: 
                                <p className="p2">
                                    {this.props.propType} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">In what city will the property be located?:
                                <p className="p2">
                                    {this.props.city}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Type of property the loan is applied to:
                                <p className="p2">
                                    {this.props.propToBeUsedOn}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Have you already found your new home?:
                                <p className="p2">
                                    {this.props.found}   
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Currently working with a real estate agent?:
                                <p className="p2">
                                    {this.props.realEstateAgent}   
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Estimated purchase price of the home:
                                <p className="p2">
                                    {this.props.cost} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Down payment:
                                <p className="p2">
                                    {this.props.downPayment} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Credit score:
                                <p className="p2">
                                    {this.props.credit}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Bankruptcy history:
                                <p className="p2">
                                    {this.props.history}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Current Address:
                                <p className="p2">
                                    {this.props.addressOne} {this.props.addressTwo} {this.props.addressThree}    
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <Link to="/finish"><button>Submit</button></Link>
                            <Link to="/"><button>Start Over</button></Link>

                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default WizardEleven;