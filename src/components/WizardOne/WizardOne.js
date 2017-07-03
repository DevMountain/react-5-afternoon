import React,  { Component } from 'react';
import {Link} from 'react-router-dom'

class WizardOne extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>What type of loan will you be needing?</p> <br />
                
                    <select onChange={this.props.handleLoanType}>

                        <option type="text" value="homePurchase" >Home Purchase</option>
                        <option type="text" value="refinance" >Refinance</option>
                        <option type="text" value="homeEquity" >Home Equity loan/line</option>

                    </select> <br/>

                    <p>What type of property are you purchasing?</p> <br />

                    <select onChange={this.props.handlePropType}>

                        <option value="singleFamHome">Single Family Home</option>
                        <option value="townHome">Townhome</option>
                        <option value="condo">Condo</option>
                        <option value="multiFam">Multi Family Dwelling</option>
                        <option value="mobileHome">Mobile Home</option>

                    </select>
                    
                    <Link to="/wTwo"><button > Next </button></Link>
                </div>
            </div>
        )
    }
}
export default WizardOne; 