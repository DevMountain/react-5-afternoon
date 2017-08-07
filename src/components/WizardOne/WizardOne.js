import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateLoanType, updatePropertyType } from '../../ducks/reducer';

class WizardOne extends Component {
  render(){
    const { updateLoanType, updatePropertyType } = this.props;

    return(
      <div className="parent-div">
        <div className="vert-align">
          <p>What type of loan will you be needing?</p> <br />
      
          <select onChange={ ( e ) => updateLoanType( e.target.value ) }>
            <option type="text" value="Home Purchase" >Home Purchase</option>
            <option type="text" value="Refinance" >Refinance</option>
            <option type="text" value="Home Equity" >Home Equity loan/line</option>
          </select> <br/>

          <p>What type of property are you purchasing?</p> <br />

          <select onChange={ ( e ) => updatePropertyType( e.target.value ) }>
            <option value="Single Family Home">Single Family Home</option>
            <option value="Town Home">Townhome</option>
            <option value="Condo">Condo</option>
            <option value="Multi Family Home">Multi Family Dwelling</option>
            <option value="Mobile Home">Mobile Home</option>
          </select>
          
          <Link to="/wTwo"><button className="margin-btn"> Next </button></Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  const { loanType, propertyType } = state;

  return {
    loanType,
    propertyType
  };
}

export default connect( mapStateToProps, { updateLoanType, updatePropertyType } )( WizardOne ); 