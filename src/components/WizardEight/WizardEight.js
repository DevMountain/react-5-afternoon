import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateHist } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardEight extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>Have you had a bankruptcy or foreclosure in the past seven years?</p> <br />
                <div className="row">
                    <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={ (e)=> this.props.updateHist(e.target.value) }>No</button></Link>
                    <Link to="/wNine"><button value="Has had bankruptcy before" onClick={ (e)=> this.props.updateHist(e.target.value) }>Bankruptcy</button></Link>
                    <Link to="/wNine"><button value="Has had a foreclosure before" onClick={ (e)=> this.props.updateHist(e.target.value) }>Foreclosure</button></Link>
                    <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={ (e)=> this.props.updateHist(e.target.value) }>Both</button></Link>
                </div>    
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      history: state.history,
    };
}
export default connect(mapStateToProps, { updateHist })(WizardEight); 