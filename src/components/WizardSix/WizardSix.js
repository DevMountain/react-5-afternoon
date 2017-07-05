import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCost, updateDownPayment } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardSix extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={ (e)=> this.props.updateCost(e.target.value) }/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={ (e)=> this.props.updateDownPayment(e.target.value) }/>
                        
                    
                    <Link to="/wSeven"><button className="wSix-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps( state ) {
  return { 
      cost: state.cost,
      downPayment: state.downPayment
    };
}
export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix); 