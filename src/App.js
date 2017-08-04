import React, { Component } from 'react';
import './App.css';
import router from './router';

import { connect } from "react-redux";


class App extends Component {
  constructor(){
    super()
    this.state = {
      //first view
      loanType: 'Home Purchase',
      propertyType: 'Single Family Home',
      //second view
      city: '',
      //third view
      propToBeUsedOn: '',
      //fourth view
      found: "false",
      //fifth view
      realEstateAgent: "false",
      //sixth view
      downPayment: 0,
      cost: 0,
      //seventh view
      credit: '',
      //eigth view
      history: '',
      //ninth view
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      //tenth view
      firstName: '',
      lastName: '',
      email: ''
    }
    //first view 
    this.handleChangeLoanType = this.handleChangeLoanType.bind(this);
    this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
    //second view
    this.handleChangeCity = this.handleChangeCity.bind(this);
    //third view
    this.handleChangePropertyToBeUsedOn = this.handleChangePropertyToBeUsedOn.bind(this);
    //fourth view
    this.handleChangeFoundFalse = this.handleChangeFoundFalse.bind(this);
    this.handleChangeFoundTrue = this.handleChangeFoundTrue.bind(this);
    //fifth view
    this.handleChangeRealEstateAgentTrue = this.handleChangeRealEstateAgentTrue.bind(this);
    this.handleChangeRealEstateAgentFalse = this.handleChangeRealEstateAgentFalse.bind(this);
    //sixth view
    this.handleChangeUpdateDownPayment = this.handleChangeUpdateDownPayment.bind(this);
    this.handleChangeUpdateCost = this.handleChangeUpdateCost.bind(this);
    //seventh view
    this.handleChangeCreditE = this.handleChangeCreditE.bind(this);
    this.handleChangeCreditG = this.handleChangeCreditG.bind(this);
    this.handleChangeCreditF = this.handleChangeCreditF.bind(this);
    this.handleChangeCreditP = this.handleChangeCreditP.bind(this);
    //eigth view
    this.handleChangeUpdateHistory = this.handleChangeUpdateHistory.bind(this);
    //ninth view
    this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
    this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
    this.handleChangeAddressThree = this.handleChangeAddressThree.bind(this);
    //tenth view
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
    //first view
    handleChangeLoanType(event) {
        this.setState({loanType : event.target.value});
    }
    handleChangePropertyType(event) {
        this.setState({propertyType : event.target.value});
    }
    //second view
    handleChangeCity(event){
        this.setState({city : event.target.value});
    }
    //third view
    handleChangePropertyToBeUsedOn(event){
        this.setState({propToBeUsedOn : event.target.value})
    }
    //fourth view
    handleChangeFoundTrue(event){
        this.setState({found : "true"});
    }
    handleChangeFoundFalse(event){
        this.setState({found : "false"});
    }
    //fifth view
    handleChangeRealEstateAgentTrue(){
        this.setState({realEstateAgent : "true"});
    }
    handleChangeRealEstateAgentFalse(){
        this.setState({realEstateAgent : "false"});
    }
    //sixth view
    handleChangeUpdateDownPayment(event){
        this.setState({downPayment : event.target.value})
    }
    handleChangeUpdateCost(event){
      this.setState({cost: event.target.value});
    }
    //seventh view
    handleChangeCreditE(){
      this.setState({credit: 'Excellent'})
    }
    handleChangeCreditG(){
      this.setState({credit: 'Good'})
    }
    handleChangeCreditF(){
      this.setState({credit: 'Fair'})
    }
    handleChangeCreditP(){
      this.setState({credit: 'Poor'})
    }
    //eigth view
    handleChangeUpdateHistory(event){
      this.setState({history: event.target.value})
    }
    //ninth view
    handleChangeAddressOne(event){
      this.setState({addressOne: event.target.value})
    }
    handleChangeAddressTwo(event){
      this.setState({addressTwo: event.target.value})
    }
    handleChangeAddressThree(event){
      this.setState({addressThree: event.target.value})
    }
    //tenth view
    handleChangeFirstName(event){
      this.setState({firstName : event.target.value})
    }
    handleChangeLastName(event){
      this.setState({lastName: event.target.value})
    }
    handleChangeEmail(event){
      this.setState({email: event.target.value})
    }

  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    state
  };
}

export default connect( mapStateToProps )( App );