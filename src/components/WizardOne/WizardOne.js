import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import { updateLoanType, updatePropertyType } from './../../ducks/reducer'
import { connect } from 'react-redux'; //ADDED

class WizardOne extends Component { 

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">

                <p>What type of loan will you be needing?</p> <br />
            
                <select onChange={(e) =>this.props.updateLoanType(e.target.value)}>

                    <option type="text" value="homePurchase" >Home Purchase</option>
                    <option type="text" value="refinance" >Refinance</option>
                    <option type="text" value="homeEquity" >Home Equity loan/line</option>

                </select> <br />  

                <p>What type of property are you purchasing?</p> <br />

                <select onChange={(e)=>this.props.updatePropertyType(e.target.value)}>

                    <option value="singleFamHome">Single Family Home</option>
                    <option value="townHome">Townhome</option>
                    <option value="condo">Condo</option>
                    <option value="multiFam">Multi Family Dwelling</option>
                    <option value="mobileHome">Mobile Home</option>

                </select>
                
                <div>
                    <Link to="/wTwo"><button className="margin-btn"> Next </button></Link>
                </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
  return { 
      loanType: state.loanType,
      propertyType: state.propertyType
    };
}
export default connect(mapStateToProps, {updateLoanType, updatePropertyType})(WizardOne); 