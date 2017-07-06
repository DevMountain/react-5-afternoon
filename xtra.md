## Step 12

### Summary

Setting up the fifth view with our reducer.

## Instructions 

In the `src/component/WizardSix/WizardSix.js`

* Import `connect` from `react-redux`.
* Import the update functions you just made from your reducer: `updateCost, updateDownPayment ` from `'./../../ducks/reducer'` (remember to destructure them). 
* Connect the WizardSix component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix);`
* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the first input element's `onChange` function equal to `{ (e)=> this.props.updateCost(e.target.value) }`.
    * Set the second input element's `onChange` function equal to `{ (e)=> this.props.updateDownPayment(e.target.value) }`.
* Our WizardSix Component should now be hooked up properly and be working with redux! 
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update function you just made from your reducer: `updateRealEstateAgent ` from `'./../../ducks/reducer'` (remember to destructure them). 

```js
import { updateCost, updateDownPayment } from './../../ducks/reducer';

```

* Connect the WizardSix component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix);`
    
```js
function mapStateToProps( state ) {
  return { 
      cost: state.cost,
      downPayment: state.downPayment
    };
}
export default connect(mapStateToProps, { updateCost, updateDownPayment })(WizardSix); 
```

* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the first input element's `onChange` function equal to `{ (e)=> this.props.updateCost(e.target.value) }`.
    * Set the second input element's `onChange` function equal to `{ (e)=> this.props.updateDownPayment(e.target.value) }`.  
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Our WizardSix Component should now be hooked up properly and be working with redux! 
    
```js
<input type="text" placeholder="amount" onChange={ (e)=> this.props.updateCost(e.target.value) }/> <br />
<input type="text" placeholder="amount" onChange={ (e)=> this.props.updateDownPayment(e.target.value) }/>
```
</details>

### Solution

<details>

<summary> <code> src/components/WizardSix/WizardSix.js </code> </summary>


```js
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
```

</details>
   