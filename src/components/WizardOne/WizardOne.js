import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import { updateLoanType, updatePropertyType } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardOne extends Component { 

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">

                <p>What type of loan will you be needing?</p> <br />
            
                <select onChange={(e) =>this.props.updateLoanType(e.target.value)}>

                    <option type="text" value="Home Purchase" >Home Purchase</option>
                    <option type="text" value="Refinance" >Refinance</option>
                    <option type="text" value="Home Equity" >Home Equity loan/line</option>

                </select> <br />  

                <p>What type of property are you purchasing?</p> <br />

                <select onChange={(e)=>this.props.updatePropertyType(e.target.value)}>


                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Town Home">Townhome</option>
                        <option value="Condo">Condo</option>
                        <option value="Multi Family Dwelling">Multi Family Dwelling</option>
                        <option value="Mobile Home">Mobile Home</option>

                </select>
                    
                    <Link to="/wTwo"><button className="margin-btn"> Next </button></Link>
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