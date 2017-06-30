import React,  { Component } from 'react';
// import { Link } from 'react-router-dom';

class WizardEleven extends Component {

    render(){
        return(
            <div>
                      
                Here's an over view of your form: <br />

                Name: {this.props.firstName} {this.props.lastName} <br />

                Email: {this.props.email} <br />

                What type of loan will you be needing?: {this.props.loanType} <br />

                What type of property are you purchasing?: {this.props.propType} <br />

                In what city will the property be located?: {this.props.city} <br />

                Type of property the loan is applied to: {this.props.propToBeUsedOn} <br />

                Have you already found your new home?: {this.props.found} <br />

                Currently working with a real estate agent?: {this.props.realEstateAgent} <br />

                Estimated purchase price of the home: {this.props.cost} <br />

                Down payment: {this.props.downPayment} <br />

                Credit score: {this.props.credit} <br />

                Bankruptcy history: {this.props.history} <br />

                Current Address: {this.props.addressOne} {this.props.addressTwo} {this.props.addressThree} <br />   
                
            </div>
        )
    }
}

export default WizardEleven;