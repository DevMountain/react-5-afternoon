<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This is a working project that currently only utilizes state and props to pass its data. Before getting started, try to get familiar with the code and see how props is being passed through to different components. In particular, take a look at the App.js. You'll notice the App.js is 127 lines of code, during this project and using `redux`, we'll be able to turn those 127 lines of code into 27.

During this project, we'll be improving on a web application that walks users through filling out a home loan application. We'll be building out the components that have already been made and make them better with `redux`. To keep track of data and pass it to the correct components via routing we'll make heavy use of `redux` and `react-redux`. We'll be making changes to all files in the components folder except for Finish.js to help them work with Redux, as well as the router.js, store.js, reducer.js, index.js and App.js.

## Setup

* `fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm i` to install current dependencies.
* Run `npm i react-redux redux react-router-dom`
* Run `npm start`.

## Step 1

### Summary

In this step, we will create our `store`. 
When using redux, the store holds the entire state of our application. So it's important we set this up first.

## Instructions
* Create a new file in your src folder called `store.js`
* Open `src/store.js`.
* Import `createStore` from `redux`.
* Import `reducer.js` from `src/ducks/reducer.js`.
* Export `createStore` by default and pass it reducer as it's argument

<details>

<summary> Detailed Instructions </summary>

<br />

In redux, components need to connect to a store. Let's create this store. Create a file in the `src` folder called `store.js`. We'll only be needing one thing from `redux`: `createStore`. `createStore` will allows us to export the creation of our store. 

```js
import { createStore } from "redux";
```

In order to create our store, we'll also need our reducer. So let's import that as well. Our reducer is located in `src/ducks`.

```js
import { createStore } from "redux";

import reducer from "./ducks/reducer";
```

Now that we have everything we need to import, let's export by default the creation of our store. 

```js
import { createStore } from "redux";

import reducer from "./ducks/reducer";

export default createStore( reducer );
```


</details>

### Solution

<details>

<summary> <code> src/store.js </code> </summary>

```js
import { createStore } from "redux";

import reducer from "./ducks/reducer";

export default createStore( reducer );
```

</details>

## Step 2

### Summary

In this step, we will take our store created from the previous step and hook it up in `src/index.js`. This will allow our App to compile correctly.

### Instructions

* Open `src/index.js`.
* Import `Provider` from `react-redux`.
* Import `store` from `src/store.js`.
* Wrap the `App` component in a `Provider` component:
  * The `Provider` component should have a `store` prop that equals `store` (remember how we call variables in jsx). 
* Import `BrowserRouter` from `react-router-dom`.
* Wrap the `Provider` in `<BrowserRouter>` tags.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that our store is created, we can hook it up to our App in `src/index.js`. This will allow our App to have access to the store and the reducers and will also allow our App to compile correctly. Let's open `src/index.js`. We'll need to import `Provider` from `react-redux` and `store` from `src/store.js`. 

```js
import store from './store'
import { Provider } from 'react-redux'
```

The `Provider` component will "provide" the store to our App. All we need to do is wrap the `App` component in a `Provider` component and give the `Proivder` component a `store` prop that equals `store`. 



```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
, document.getElementById('root'));
registerServiceWorker();
```

Lastly, since we're using routing we'll be needing to import `BrowserRouter` from `react-router-dom`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>    
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
```

</details>


### Solution

<details>

<summary> <code> src/index.js </code> </summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>    
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
```
</details>

## Step 3

### Summary

We need to clean up our `App.js` and `router.js` and get them ready to be used with `redux`. Let's go check out our router.js first. This view is almost as messy as our `App.js`. 

Because we needed to pass state down to our routes, we had to make our routing a function. Currently, we're exporting a function by default in our `router.js`, by making this a function, we were able to import it into our `App.js` and then pass it props through its arguments. 

In addition to our route component being a function, the way we're connecting our `Route` to the correct component is using a `render={()=> <Component prop={prop}/> path='/'}` instead of a `component={Component} path='/'`. The reason we needed to use render this way was so we could pass props down through the Components element. However, this results in messy looking code, so let's clean it up.



## Instructions

* Export default our router without making it a function.
    * Now that our routes aren't exported in a function, we don't need to `return` anything.
    * You will start getting errors coming from the props on the routes rendered elements once our routing is no longer a function, this is because they're no longer receiving information via parameters from the function and are now undefined.
* Import `HashRouter` from `react-router-dom`.
    * Instead of using `Switch`, we're going to use `HashRouter` from `react-router-dom` to wrap our routes. (HashRouter uses the hash portion of our URL to keep our UI in sync with the URL when we change views).
* Wrap routes in a div, HashRouter can only have one first level element, so we will nest our routes inside of the div. 
* For each individual route, instead of using render, we will be using component. A route should look like the following: `<Route component={WizardOne}  path='/wOne'/>`
* Now that we've changed our `router.js`, no data is going to be passed to our other components, you will also get an error that says `TypeError: __webpack_require__.i(...) is not a function`. This is because in our `App.js` router is still being treated as a function.
* Go to your `App.js` and remove the invoking parenthesis from your `{router}` as well as the content inside of them.


<details>

<summary> Detailed Instructions </summary>

<br />

* Export default our router without making it a function.
```js
export default (

)
```

* Import `HashRouter` from `react-router-dom`.
    * Instead of using `Switch`, we're going to use `HashRouter` from `react-router-dom` to wrap our routes. (HashRouter uses the hash portion of our URL to keep our UI in sync with the URL when we change views).
```js
import {  Route, HashRouter } from 'react-router-dom';
```
* Wrap routes in a div, HashRouter can only have one first level element, so we will nest our routes inside of the div. Example:
```js
export default (

        <HashRouter>
            <div>  
                 
                <Route component={NextBtn} exact path= '/'/>
                <Route component={WizardOne}  path='/wOne'/>
                
            </div>
        </HashRouter>
)
```
* For each individual route, instead of using render, we will be using component. A route should look like the following: `<Route component={WizardOne}  path='/wOne'/>`

```js
export default (

        <HashRouter>
            <div>  
                 
                <Route component={NextBtn} exact path= '/'/>
                <Route component={WizardOne}  path='/wOne'/>
                <Route component={WizardTwo}  path="/wTwo"/>
                <Route component={WizardThree} path="/wThree"/>
                <Route component={WizardFour} path="/wFour"/>
                <Route component={WizardFive} path="/wFive"/>
                <Route component={WizardSix} path="/wSix"/>
                <Route component={WizardSeven} path="/wSeven"/>
                <Route component={WizardEight} path="/wEight"/>
                <Route component={WizardNine} path="/wNine"/>
                <Route component={WizardTen} path="/wTen"/>
                <Route component={WizardEleven} path="/wEleven"/>
                <Route component={Finish} path='/finish'/>

            </div>
        </HashRouter>
)
```
* Now that we've changed our `router.js`, no data is going to be passed to our other components, you will also get an error that says `TypeError: __webpack_require__.i(...) is not a function`. This is because in our `App.js` router is still being treated as a function.
* Go to your `App.js` and remove the invoking parenthesis from your `{router}` as well as the content inside of them.
```js
  render() {
    return (
      <div>
    
        {router}

      </div>
    );
  }
```
</details>


### Solution

<details>

<summary> <code> src/router.js </code> </summary>

```js
import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import {  Route, HashRouter } from 'react-router-dom';

export default (

        <HashRouter>
            <div>  
                 
                <Route component={NextBtn} exact path= '/'/>
                <Route component={WizardOne}  path='/wOne'/>
                <Route component={WizardTwo}  path="/wTwo"/>
                <Route component={WizardThree} path="/wThree"/>
                <Route component={WizardFour} path="/wFour"/>
                <Route component={WizardFive} path="/wFive"/>
                <Route component={WizardSix} path="/wSix"/>
                <Route component={WizardSeven} path="/wSeven"/>
                <Route component={WizardEight} path="/wEight"/>
                <Route component={WizardNine} path="/wNine"/>
                <Route component={WizardTen} path="/wTen"/>
                <Route component={WizardEleven} path="/wEleven"/>
                <Route component={Finish} path='/finish'/>

            </div>
        </HashRouter>
)
```
</details>

<details>
<summary><code> src/App.js</code></summary>

```js
import React, { Component } from 'react';
import './App.css';
import router from './router'


class App extends Component {
  constructor(){
    super()
    this.state = {
      loanType: 'Home Purchase',
      propertyType: 'Single Family Home',
      propToBeUsedOn: '',
      city: '',
      found: "false",
      realEstateAgent: "false",
      downPayment: 0,
      cost: 0,
      credit: '',
      history: '',
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      firstName: '',
      lastName: '',
      email: ''
    }
     
    this.handleChangeLoanType = this.handleChangeLoanType.bind(this);
    this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
    this.handleChangePropertyToBeUsedOn = this.handleChangePropertyToBeUsedOn.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeFoundFalse = this.handleChangeFoundFalse.bind(this);
    this.handleChangeFoundTrue = this.handleChangeFoundTrue.bind(this);
    this.handleChangeRealEstateAgentTrue = this.handleChangeRealEstateAgentTrue.bind(this);
    this.handleChangeRealEstateAgentFalse = this.handleChangeRealEstateAgentFalse.bind(this);
    this.handleChangeUpdateDownPayment = this.handleChangeUpdateDownPayment.bind(this);
    this.handleChangeUpdateCost = this.handleChangeUpdateCost.bind(this);
    this.handleChangeCreditE = this.handleChangeCreditE.bind(this);
    this.handleChangeCreditG = this.handleChangeCreditG.bind(this);
    this.handleChangeCreditF = this.handleChangeCreditF.bind(this);
    this.handleChangeCreditP = this.handleChangeCreditP.bind(this);
    this.handleChangeUpdateHistory = this.handleChangeUpdateHistory.bind(this);
    this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
    this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
    this.handleChangeAddressThree = this.handleChangeAddressThree.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
    
    handleChangeLoanType(event) {
        this.setState({loanType : event.target.value});
    }
    handleChangePropertyType(event) {
        this.setState({propertyType : event.target.value});
    }
    handleChangePropertyToBeUsedOn(event){
        this.setState({propToBeUsedOn : event.target.value})
    }
    handleChangeCity(event){
        this.setState({city : event.target.value});
    }
    handleChangeFoundTrue(event){
        this.setState({found : "true"});
    }
    handleChangeFoundFalse(event){
        this.setState({found : "false"});
    }
    handleChangeRealEstateAgentTrue(){
        this.setState({realEstateAgent : "true"});
    }
    handleChangeRealEstateAgentFalse(){
        this.setState({realEstateAgent : "false"});
    }
    handleChangeUpdateDownPayment(event){
        this.setState({downPayment : event.target.value})
    }
    handleChangeUpdateCost(event){
      this.setState({cost: event.target.value});
    }
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
    handleChangeUpdateHistory(event){
      this.setState({history: event.target.value})
    }
    handleChangeAddressOne(event){
      this.setState({addressOne: event.target.value})
    }
    handleChangeAddressTwo(event){
      this.setState({addressTwo: event.target.value})
    }
    handleChangeAddressThree(event){
      this.setState({addressThree: event.target.value})
    }
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
    
        {router}

      </div>
    );
  }
}

export default App;
```
</details>

## Step 4

### Summary
In this next step, we'll be looking at our `App.js`, understanding what's happening with state. Then transition into how we'll be handling state with redux.

## Instructions
Now that we have our `router.js` cleaned up, let's head over to our App.js and take a look at what we have.

You'll notice that throughout this file there are comments, these comments are there to more easily show which pieces of state have to do with which views/routes. In this step, we're just going to connect our App.js and first view to redux. 

Sidenote: You can either leave the constructor function, super, state, all of the bound functions and regular functions that originally dealt with state in there if you'd like. Or it may help to take out the specific ones that deal with state one at a time as you connect things to redux. In this project I'll be removing them all at once. 

* Import `connect` from `react-redux`
* At the bottom of the page make a function called `mapStateToProps`, pass it `state`, then return `state`
* Instead of having `export default App`, we're going to be using `connect` to connect the `App.js` to the `redux` store. `export default connect(mapStateToProps)(App);`

<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`;
```js
import { connect } from 'react-redux'
```
* At the bottom of the page make a function called `mapStateToProps`, pass it `state`, then return `state`
```js
function mapStateToProps(state){
  return{

      state

  }
}

```
* Instead of having `export default App`, we're going to be using `connect` to connect the `App.js` to the `redux` store. `export default connect(mapStateToProps)(App);`
```js
export default connect(mapStateToProps)(App);
```
</details>

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import './App.css';
import router from './router'
import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div>
    
      {router}

      </div>
    );
  }
}

function mapStateToProps(state){
  return{

      state

  }
}

export default connect(mapStateToProps)(App);
```
</details>


## Step 5

### Summary

Now that our App is set up, let's connect our Eleventh view to the store, so that moving forward, as we start hooking our views up with `redux`, we'll be able to see the data getting to where it needs to end up.

## Instructions 

In `src/components/WizardEleven/WizardEleven.js`

* Import `connect` from `react-redux`
* Connect the component to the `redux store`
    * Create a function `mapStateToProps`, pass it state.
    * Return an object with the properties that you want from state.
    * You will need to look at the detailed instructions or solution to get all of the properties you'll want on this Component for the return object.
    * Export your component similarly to how it was done in the `App.js`: `export default connect(mapStateToProps)(WizardEleven);`


<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`

```js
import { connect } from 'react-redux'; 

```

* Connect the component to the `redux store`
    * Create a function `mapStateToProps`, pass it state.
    * Return an object with the properties that you want from state.
    * Export your component similarly to how it was done in the `App.js`: `export default connect(mapStateToProps)(WizardEleven);`


```js
function mapStateToProps( state ) {
        return{ 
            loanType: state.loanType,
            propertyType: state.propertyType,
            city: state.city,
            propToBeUsedOn: state.propToBeUsedOn,
            found: state.found,
            realEstateAgent: state.realEstateAgent,
            cost: state.cost,
            downPayment: state.downPayment,
            credit: state.credit,
            history: state.history,
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            addressThree: state.addressThree,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
        };
        
}
export default connect(mapStateToProps)(WizardEleven); 
```
</details>

### Solution

<details>

<summary> <code> src/components/WizardEleven/WizardEleven.js </code> </summary>

```js
import React,  { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

class WizardEleven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                
                      
                    <p>Here is an overview of your form:</p> 
                    <div >
                        <div className="overarching-div">
                            <div className="form" >Name: 
                                <p className="p2">
                                    {this.props.firstName} {this.props.lastName}
                                </p>
                            </div> 
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Email: 
                                <p className="p2">
                                  {this.props.email}
                                </p>
                            </div> 
                        </div>
                        <div className="overarching-div">
                            <div className="form" >What type of loan will you be needing?: 
                                <p className="p2">
                                    {this.props.loanType}
                                </p> 
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >What type of property are you purchasing?: 
                                <p className="p2">
                                    {this.props.propertyType}
                                </p>
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >In what city will the property be located?: 
                                <p className="p2"> 
                                    {this.props.city}
                                </p>
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Type of property the loan is applied to:
                                <p className="p2">
                                    {this.props.propToBeUsedOn}
                                </p> 
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Have you already found your new home?: 
                                <p className="p2">
                                    {this.props.found}
                                </p>
                            </div> 
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Currently working with a real estate agent?: 
                                <p className="p2">
                                    {this.props.realEstateAgent}
                                </p>
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Estimated purchase price of the home: 
                                <p className="p2">
                                    {this.props.cost}
                                </p>
                            </div> 
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Down payment: 
                                <p className="p2">
                                    {this.props.downPayment}
                                </p>
                            </div> 
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Credit score: 
                                <p className="p2"> 
                                    {this.props.credit}
                                </p>
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Bankruptcy history: 
                                <p className="p2">
                                    {this.props.history}
                                </p>
                            </div>
                        </div>
                        <div className="overarching-div">
                            <div className="form" >Current Address: 
                                <p className="p2">
                                    {this.props.addressOne} <br />
                                    {this.props.addressTwo} <br />
                                    {this.props.addressThree}
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
               <div className="row">
                    <Link to="/finish"> <button>Send</button></Link>
                    <Link to="/"> <button>Start Again</button></Link>
               </div>
            </div>
            )
       }
}
function mapStateToProps( state ) {
        return{ 
            loanType: state.loanType,
            propertyType: state.propertyType,
            city: state.city,
            propToBeUsedOn: state.propToBeUsedOn,
            found: state.found,
            realEstateAgent: state.realEstateAgent,
            cost: state.cost,
            downPayment: state.downPayment,
            credit: state.credit,
            history: state.history,
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            addressThree: state.addressThree,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
        };
        
}
export default connect(mapStateToProps)(WizardEleven); 
```
</details>


## Step 6

### Summary

Now our App is connected with redux, let's think about what needs to have access to our state in our first view: `WizardOne.js`. It looks like we need to be able to update the loanType and propertyType items on state. In redux, in order to update something, we need to have an action and a reducer, so let's go to our `src/ducks/reducer.js`.

## Instructions

* First, let's create our `initialState`. Initial state serves as a placeholder for what we want to change on state, `redux` needs the state to always be defined so having a placeholder prevents it from being undefined.
    * Create a const called `initialState`, set it equal to an object with these values and place them above your reducer function, not inside:

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}
```
* Create a function called reducer and pass it `state` equal to `initialState` and an `action`.
* At the bottom of the file `export default reducer`. This reducer will take place in actually manipulating state once we put some cases in it. 
* Above the reducer we're going to make two const's, one called `UPDATE_LOAN_TYPE ` set equal to a string `"UPDATE_LOAN_TYPE "`, the other called `UPDATE_PROPERTY_TYPE ` set equal to a string `"UPDATE_PROPERTY_TYPE "`. 
    * When we make a case, it takes a type of string. So we save those strings into consts. We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled. It helps us to be more efficient.
* Now let's set up the `action` that will connect to the `reducer`:
    * `Actions` will be exported functions, below the reducer function.
    * All of our `actions` will return an object with a `type` and `payload`.
* Export a function called `updateLoanType`, pass it `loanType`. 
    * Inside of `updateLoanType`, return an object with `type: UPDATE_LOAN_TYPE` and `payload: loanType`. `UPDATE_LOAN_TYPE` is equal to the string in that const we set before, `loanType` is a parameter in the function that serves as what we want to actually change on state.
* Export another function called `updatePropertyType`. 
    * Return an object with `type: UPDATE_PROPERTY_TYPE` and `payload: property`. `UPDATE_PROPERTY_TYPE` is equal to the string in that const we set before, `property` is a parameter in the function that serves as what we want to actually change on state.

The action needs a reducer now that will change the state. Inside of the reducer function, create a switch statement, passing it action.type as a parameter. 

* The action parameter in our reducer function is equal to the object our actions return, which is why we pass the switch statement action.type.

* Create a `case` with `UPDATE_LOAN_TYPE`, enter down and tab in once, return `Object.assign({}, state, {loanType: action.payload})`
* Create another `case` with `UPDATE_PROPERTY_TYPE`, enter down and tab in once, return `Object.assign({}, state, {propertyType: action.payload})`
    * Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.
* At the end of all our cases we need a default to return if nothing matches action.type. We need to return state by default.

<details>

<summary> Detailed Instructions </summary>

* First, let's create our `initialState`. Initial state serves as a placeholder for what we want to change on state, `redux` needs the state to always be defined so having a placeholder prevents it from being undefined.
    * Create a const called `initialState`, set it equal to an object with these values:

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}
```
* Create a function called reducer and pass it `state` equal to `initialState` and an `action`.

```js
function reducer(state=initialState, action){ 

}
```

* At the bottom of the file `export default reducer`. This reducer will take place in actually manipulating state once we put some cases in it. 

```js
function reducer(state=initialState, action){ 

}
export default reducer; 
```
* Above the reducer we're going to make two const's, one called `UPDATE_LOAN_TYPE ` set equal to a string `"UPDATE_LOAN_TYPE "`, the other called `UPDATE_PROPERTY_TYPE ` set equal to a string `"UPDATE_PROPERTY_TYPE "`. 
    * We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled.

```js
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
```

* Now let's set up the `action` that will connect to the `reducer`:
    * `Actions` will be exported functions, below the reducer function, export a function called `updateLoanType`, pass it `loanType`. 
    * All of our `actions` will return an object with a `type` and `payload`.
    * Return an object with `type: UPDATE_LOAN_TYPE` and `payload: loanType`. 
        * `UPDATE_LOAN_TYPE` is equal to the string in that const we set before, `loanType` is a parameter in the function that serves as what we want to actually change on state.
    * Return an object with `type: UPDATE_PROPERTY_TYPE` and `payload: property`. 
        * `UPDATE_PROPERTY_TYPE` is equal to the string in that const we set before, `property` is a parameter in the function that serves as what we want to actually change on state.

    
```js
export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}
```
* The action needs a reducer now that will change the state. Inside of the reducer function, create a switch statement, passing it action.type as a parameter. 
    * The action parameter in our reducer function is equal to the object our actions return, which is why we pass the switch statement action.type.

```js
function reducer(state=initialState, action){ 
    switch(action.type){

    }
}
```

* Create a `case` with `UPDATE_LOAN_TYPE`, enter down and tab in once, return `Object.assign({}, state, {loanType: action.payload})`
* Create another `case` with `UPDATE_PROPERTY_TYPE`, enter down and tab in once, return `Object.assign({}, state, {propertyType: action.payload})`
    * Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.
* At the end of all our cases we need a default to return if nothing matches action.type. We need to return state by default.
```js
function reducer(state=initialState, action){ 
    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})

        default:
            return state;
    }
}
```
</details>

### Solution

<details>

<summary> <code> src/ducks/reducer.js </code> </summary>

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'; 

function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})

        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export default reducer; 
```

</details>

## Step 7

### Summary

Now that the `action` and `reducer` are set up for our first view, let's head over to `src/WizardOne.js`.

### Instructions

* Import `connect` from `react-redux`.
* Import the update functions you just made from your reducer: `updateLoanType` and `updatePropertyType` from `'./../../ducks/reducer'` (remember to destructure them).
* Currently, in the first select elements `onChange` function, we have `{this.props.handleLoanType}`. This is because we were previously being passed the handle function on props coming from our `App.js`, to the `router.js`, then to our WizardOne component. Now that we're using `redux`, we'll be handling it a little differently.
* Connect the WizardOne component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the two pieces of state you'll be updating/wanting access to.
    * The export default will be a little different, this time we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, {updateLoanType, updatePropertyType})(WizardOne);`
* Now our component is connected to the `redux store`, let's access the function we need to change state. On the first select element on the `onChange` event, set it equal to `{(e) =>this.props.updateLoanType(e.target.value)}`.
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Go to the second select element's `onChange` even and set it equal to `{(e)=>this.props.updatePropertyType(e.target.value)}`
* Our WizardOne Component should now be hooked up properly and be working with redux! 
* If you'd like to, you can console log what's currently on state by writing `console.log(this.props)` inside of the `render()` function.

<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 
```

* Import the update functions you just made from your reducer: `updateLoanType` and `updatePropertyType` from `'./../../ducks/reducer'` (remember to destructure them).

```js
import { updateLoanType, updatePropertyType } from './../../ducks/reducer'
```
* Currently, in the first select elements `onChange` function, we have `{this.props.handleLoanType}`. This is because we were previously being passed the handle function on props coming from our `App.js`, to the `router.js`, then to our WizardOne component. Now that we're using `redux`, we'll be handling it a little differently.
* Connect the WizardOne component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.

```js
function mapStateToProps( state ) {

}
```
* Return an object that contains the two pieces of state you'll be updating/wanting access to.

```js
function mapStateToProps( state ) {
  return { 
      loanType: state.loanType,
      propertyType: state.propertyType
    };
}
```
* The export default will be a little different, this time we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, {updateLoanType, updatePropertyType})(WizardOne);`

```js
export default connect(mapStateToProps, {updateLoanType, updatePropertyType})(WizardOne); 

```
* Now our component is connected to the `redux store`, let's access the function we need to change state. On the first select element on the `onChange` event, set it equal to `{(e) =>this.props.updateLoanType(e.target.value)}`.
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.

```js
<select onChange={(e) =>this.props.updateLoanType(e.target.value)}>

```
* Go to the second select element's `onChange` even and set it equal to `(e)=>this.props.updatePropertyType(e.target.value)}`

```js
<select onChange={(e)=>this.props.updatePropertyType(e.target.value)}>

```
</details>

### Solution

<details>

<summary> <code> src/components/WizardOne/WizardOne.js </code> </summary>


```js
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
```

</details>


## Step 8

### Summary

Now that we have our first view hooked up. Let's move on to the second View.

## Instructions 

In the `src/ducks/reducer.js`

* Create a new const: `const UPDATE_CITY = 'UPDATE_CITY';`
* Create an action for updating the city:
    * Beneath the reducer function, export a function called `updateCity` and pass it `city` as a parameter.
    * Return an object with a `type` equal to `UPDATE_CITY` and a `payload` equal to `city`.
* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_CITY`
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.


<details>

<summary> Detailed Instructions </summary>

* Create a new const: `const UPDATE_CITY = 'UPDATE_CITY';`
    * We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled.
```js
const UPDATE_CITY = 'UPDATE_CITY';

```

* Create an action for updating the city:
    * All `actions` will return an object with a `type` and `payload`.
    * Beneath the reducer function, export a function called `updateCity` and pass it `city` as a parameter.
    * Return an object with a `type` equal to `UPDATE_CITY` and a `payload` equal to `city`.

```js
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
```

* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_CITY`
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.
    * Remember, Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.

```js
    case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload})
```
</details>

### Solution

<details>

<summary> <code> src/ducks/reducer.js </code> </summary>

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';

function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})

        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export default reducer; 
```

</details>

## Instructions 

In the `src/component/WizardTwo/WizardTwo.js`

* Import `connect` from `react-redux`.
* Import the update function you just made from your reducer: `updateCity` from `'./../../ducks/reducer'` (remember to destructure them). 
* Connect the WizardTwo component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateCity })(WizardTwo); `
* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the input element's `onChange` function equal to `{(e)=>this.props.updateCity(e.target.value)}`.
* Our WizardTwo Component should now be hooked up properly and be working with redux! 
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update function you just made from your reducer: `updateCity` from `'./../../ducks/reducer'` (remember to destructure them). 

```js
import { updateCity } from './../../ducks/reducer'

```

* Connect the WizardTwo component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateCity })(WizardTwo); `
    
```js
function mapStateToProps( state ) {
  return { 
      city: state.city
    };
}
export default connect(mapStateToProps, { updateCity })(WizardTwo); 
```

* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the input element's `onChange` function equal to `{(e)=>this.props.updateCity(e.target.value)}`.
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Our WizardTwo Component should now be hooked up properly and be working with redux! 
* You can see what's on state by writing `console.log(this.props)` inside of the `render()` function.
    
```js
<input placeholder="city name" type="text" onChange={(e)=>this.props.updateCity(e.target.value)}/>

```
</details>

### Solution

<details>

<summary> <code> src/components/WizardTwo/WizardTwo.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCity } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardTwo extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                    <p>In what city will the property be located?</p><br />
                
                    <input placeholder="city name" type="text" onChange={(e)=>this.props.updateCity(e.target.value)}/>
               
                <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      city: state.city
    };
}
export default connect(mapStateToProps, { updateCity })(WizardTwo); 
```

</details>



## Step 9
### Summary

Now that we have our second view hooked up. Let's move on to the third View.

## Instructions
In the `src/ducks/reducer.js`

* Create a new const: `const UPDATE_PROP  = 'UPDATE_PROP ';`
* Create an action for updating the prop:
    * Beneath the reducer function, export a function called `updatePropToBeUsedOn` and pass it `prop` as a parameter.
    * Return an object with a `type` equal to `UPDATE_PROP ` and a `payload` equal to `prop`.
* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_PROP `
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.


<details>

<summary> Detailed Instructions </summary>

* Create a new const: `const UPDATE_PROP = 'UPDATE_PROP';`
    * We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled.
```js
const UPDATE_PROP = 'UPDATE_PROP';

```

* Create an action for updating the prop:
    * All `actions` will return an object with a `type` and `payload`.
    * Beneath the reducer function, export a function called `updatePropToBeUsedOn` and pass it `prop` as a parameter.
    * Return an object with a `type` equal to `UPDATE_PROP` and a `payload` equal to `prop`.

```js
export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
```

* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_PROP`
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.
    * Remember, Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.

```js
    case UPDATE_PROP:
        return Object.assign({}, state, {propToBeUsedOn: action.payload})
```

</details>


### Solution

<details>

<summary> <code> src/ducks/reducer.js </code> </summary>


```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';

function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})

        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export default reducer; 
```

</details>


## Instructions 

In the `src/component/WizardThree/WizardThree.js`

* Import `connect` from `react-redux`.
* Import the update function you just made from your reducer: `updatePropToBeUsedOn` from `'./../../ducks/reducer'` (remember to destructure them). 
* Connect the WizardThree component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updatePropToBeUsedOn })(WizardThree); `
* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set all of the button element's `onChange` functions equal to `{(e) =>this.props.updatePropToBeUsedOn(e.target.value)}`.
* Our WizardThree Component should now be hooked up properly and be working with redux! 
* You can see what's on state by writing `console.log(this.props)` inside of the `render()` function.
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update function you just made from your reducer: `updatePropToBeUsedOn` from `'./../../ducks/reducer'` (remember to destructure them). 

```js
import { updatePropToBeUsedOn } from './../../ducks/reducer'

```

* Connect the WizardThree component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updatePropToBeUsedOn })(WizardThree); `
    
```js
function mapStateToProps( state ) {
  return { 
      propToBeUsedOn: state.propToBeUsedOn
    };
}
export default connect(mapStateToProps, { updatePropToBeUsedOn })(WizardThree); 
```

* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set all of the button element's `onChange` functions equal to `{(e) =>this.props.updatePropToBeUsedOn(e.target.value)}`.
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Our WizardThree Component should now be hooked up properly and be working with redux! 
    
```js
<Link to="/wFour"><button value="Primary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Primary Home</button></Link>
<Link to="/wFour"><button value="Rental Property" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Rental Property</button></Link>
<Link to="/wFour"><button value="Secondary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Secondary Home</button></Link>
```
</details>

### Solution

<details>

<summary> <code> src/components/WizardThree/WizardThree.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updatePropToBeUsedOn } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardThree extends Component {
    
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                <p>What property are you looking to use the loan on?</p> <br />
                    <div className="row">
                        <Link to="/wFour"><button value="Primary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="Rental Property" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="Secondary Home" onClick={(e) =>this.props.updatePropToBeUsedOn(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>        
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      propToBeUsedOn: state.propToBeUsedOn
    };
}
export default connect(mapStateToProps, { updatePropToBeUsedOn })(WizardThree); 
```

</details>

## Step 10

### Summary

Now that we have our third view hooked up. Let's move on to the fourth View.

## Instructions 

In the `src/ducks/reducer.js`

* Create a new const: `const UPDATE_FOUND = 'UPDATE_FOUND';`
* Create an action for updating found:
    * Beneath the reducer function, export a function called `updateFound` and pass it `found` as a parameter.
    * Return an object with a `type` equal to `UPDATE_FOUND` and a `payload` equal to `found`.
* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_FOUND`
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.


<details>

<summary> Detailed Instructions </summary>

* Create a new const: `const UPDATE_FOUND = 'UPDATE_FOUND';`
    * We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled.
```js
const UPDATE_FOUND = 'UPDATE_FOUND';

```

* Create an action for updating the found:
    * All `actions` will return an object with a `type` and `payload`.
    * Beneath the reducer function, export a function called `updateFound` and pass it `found` as a parameter.
    * Return an object with a `type` equal to `UPDATE_FOUND` and a `payload` equal to `found`.

```js
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
```

* Create a reducer to update state for that action. Inside the reducer function:
    * Create a case for `UPDATE_FOUND`
    * Return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.
    * Remember, Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.

```js
    case UPDATE_FOUND:
        return Object.assign({}, state, {found: action.payload})
```
</details>

### Solution

<details>

<summary> <code> src/ducks/reducer.js </code> </summary>

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';


function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})

        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export default reducer; 
```

</details>

## Instructions 

In the `src/component/WizardFour/WizardFour.js`

* Import `connect` from `react-redux`.
* Import the update function you just made from your reducer: `updateFound` from `'./../../ducks/reducer'` (remember to destructure them). 
* Connect the WizardFour component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateFound })(WizardFour); `
* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the input element's `onChange` function equal to `{(e)=>this.props.updateFound(e.target.value)}`.
* Our WizardFour Component should now be hooked up properly and be working with redux! 
* You can see what's on state by writing `console.log(this.props)` inside of the `render()` function.
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update function you just made from your reducer: `updateFound` from `'./../../ducks/reducer'` (remember to destructure them). 

```js
import { updateFound } from './../../ducks/reducer'

```

* Connect the WizardFour component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateFound })(WizardFour); `
    
```js
function mapStateToProps( state ) {
  return { 
      found: state.found
    };
}
export default connect(mapStateToProps, { updateFound })(WizardFour); 
```

* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the input element's `onChange` function equal to `{(e)=>this.props.updateFound(e.target.value)}`.
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Our WizardFour Component should now be hooked up properly and be working with redux! 
    
```js
<input placeholder="found name" type="text" onChange={(e)=>this.props.updateFound(e.target.value)}/>

```
</details>

### Solution

<details>

<summary> <code> src/components/WizardFour/WizardFour.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFound } from './../../ducks/reducer'
import { connect } from 'react-redux'; 


class WizardFour extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
               <p>Have you already found your new home?</p> <br />
                <div className="row">
                    <Link to="/wFive"><button onClick={ (e)=>this.props.updateFound("True") }>Yes</button></Link>
                    <Link to="/wFive"><button onClick={ (e)=>this.props.updateFound("False") }>No </button></Link> 
                </div>           
            </div>
        </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      found: state.found
    };
}
export default connect(mapStateToProps, { updateFound })(WizardFour); 
```

</details>

## Step 11

### Summary

Now that we have our fourth view hooked up, I think we're getting the hang of the flow between the reducer and our component. So in this step we're going to finish out our reducer.js.

## Instructions 

In the `src/ducks/reducer.js`

* Create the following new const's: 

```js
const UPDATE_REALESTATE_AGENT = "UPDATE_REALESTATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HIST = "UPDATE_HIST";
const UPDATE_ADD_ONE = "UPDATE_ADD_ONE";
const UPDATE_ADD_TWO = "UPDATE_ADD_TWO";
const UPDATE_ADD_THREE = "UPDATE_ADD_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL"; 
```

* Create actions for updating the following properties:
    * realEstateAgent
    * cost
    * downPayment
    * credit
    * history
    * addressOne
    * addressTwo
    * addressThree
    * firstName
    * lastName
    * email
* Remember to export each function, and that each function returns an object with two properties: `type` and `payload`.
* Each function will have a parameter being passed into it that contains the value for `payload`, it's what we'll be updating the property on state to. 
* `type` will equal the case you want your action to match

<details>

<summary> Detailed Instructions </summary>

* Create actions for updating the following properties:
    * realEstateAgentalse
    * cost
    * downPayment
    * credit
    * history
    * addressOne
    * addressTwo
    * addressThree
    * firstNamea'
    * lastName
    * email
* Remember to export each function, and that each function returns an object with two properties: `type` and `payload`.
* Each function will have a parameter being passed into it that contains the value for `payload`, it's what we'll be updating the property on state to. 
* `type` will equal the case you want your action to match

```js
export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateRealEstateAgent(bool){
    return {
        type: UPDATE_REALESTATE_AGENT,
        payload: bool
    }    
}

export function updateCost(num){
    return {
        type: UPDATE_COST,
        payload: num
    }    
}

export function updateDownPayment(num){
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: num
    }    
}

export function updateCredit(num){
    return {
        type: UPDATE_CREDIT,
        payload: num
    }    
}

export function updateHist(hist){
    return {
        type: UPDATE_HIST,
        payload: hist
    }    
}

export function updateAddOne(add){
    return {
        type: UPDATE_ADD_ONE,
        payload: add
    }    
}
export function updateAddTwo(add){
    return {
        type: UPDATE_ADD_TWO,
        payload: add
    }    
}
export function updateAddThree(add){
    return {
        type: UPDATE_ADD_THREE,
        payload: add
    }    
}

export function updateFirstName(first){
    return {
        type: UPDATE_FIRST_NAME,
        payload: first
    }    
}

export function updateLastName(last){
    return {
        type: UPDATE_LAST_NAME,
        payload: last
    }    
}

export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }    
}
```

</details>

* Moving on to our reducers, you'll need to make cases that will activate depending on which action.type is passed through the switch function.  
* Create a case for each action type
    * In each case, return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.
    * Remember, Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.

<details>

<summary> Detailed Instructions </summary>

* Moving on to our reducers, you'll need to make cases that will activate depending on which action.type is passed through the switch function.  
* Create a case for each action type
    * In each case, return a new object that will become state, pass it empty curly braces, state, and the property with the value that you want to change.
    * Remember, Object.assign is used to copy values from an original source, the first parameter is curly brackets, showing that we want to make a `new` object, the second parameter is state, which is the object we want to copy all the values of, and the third parameter targets the specific property and it's value that we want to change on this new version of state.

```js
function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})
        case UPDATE_REALESTATE_AGENT:
            return Object.assign({}, state, {realEstateAgent: action.payload})
        case UPDATE_COST:
            return Object.assign({}, state, {cost: action.payload})
        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, {downPayment: action.payload})
        case UPDATE_CREDIT:
            return Object.assign({}, state, {credit: action.payload})
        case UPDATE_HIST:
            return Object.assign({}, state, {history: action.payload})
        case UPDATE_ADD_ONE:
            return Object.assign({}, state, {addressOne: action.payload})
        case UPDATE_ADD_TWO:
            return Object.assign({}, state, {addressTwo: action.payload})
        case UPDATE_ADD_THREE:
            return Object.assign({}, state, {addressThree: action.payload})
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload})
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload})
        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload})

        default:
            return state
    }
} 
```

</details>


### Solution

<details>

<summary> <code> src/ducks/reducer.js </code> </summary>

```js
const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REALESTATE_AGENT = "UPDATE_REALESTATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HIST = "UPDATE_HIST";
const UPDATE_ADD_ONE = "UPDATE_ADD_ONE";
const UPDATE_ADD_TWO = "UPDATE_ADD_TWO";
const UPDATE_ADD_THREE = "UPDATE_ADD_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL"; 

function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})
        case UPDATE_REALESTATE_AGENT:
            return Object.assign({}, state, {realEstateAgent: action.payload})
        case UPDATE_COST:
            return Object.assign({}, state, {cost: action.payload})
        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, {downPayment: action.payload})
        case UPDATE_CREDIT:
            return Object.assign({}, state, {credit: action.payload})
        case UPDATE_HIST:
            return Object.assign({}, state, {history: action.payload})
        case UPDATE_ADD_ONE:
            return Object.assign({}, state, {addressOne: action.payload})
        case UPDATE_ADD_TWO:
            return Object.assign({}, state, {addressTwo: action.payload})
        case UPDATE_ADD_THREE:
            return Object.assign({}, state, {addressThree: action.payload})
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload})
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload})
        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload})



        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateRealEstateAgent(bool){
    return {
        type: UPDATE_REALESTATE_AGENT,
        payload: bool
    }    
}

export function updateCost(num){
    return {
        type: UPDATE_COST,
        payload: num
    }    
}

export function updateDownPayment(num){
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: num
    }    
}

export function updateCredit(num){
    return {
        type: UPDATE_CREDIT,
        payload: num
    }    
}

export function updateHist(hist){
    return {
        type: UPDATE_HIST,
        payload: hist
    }    
}

export function updateAddOne(add){
    return {
        type: UPDATE_ADD_ONE,
        payload: add
    }    
}
export function updateAddTwo(add){
    return {
        type: UPDATE_ADD_TWO,
        payload: add
    }    
}
export function updateAddThree(add){
    return {
        type: UPDATE_ADD_THREE,
        payload: add
    }    
}

export function updateFirstName(first){
    return {
        type: UPDATE_FIRST_NAME,
        payload: first
    }    
}

export function updateLastName(last){
    return {
        type: UPDATE_LAST_NAME,
        payload: last
    }    
}

export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }    
}
export default reducer; 
```

</details>

## Step 12

### Summary

Setting up the fifth view with our reducer.

## Instructions 

In the `src/component/WizardFive/WizardFive.js`

* Import `connect` from `react-redux`.
* Import the update function you just made from your reducer: `updateRealEstateAgent ` from `'./../../ducks/reducer'` (remember to destructure them). 
* Connect the WizardFive component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateRealEstateAgent  })(WizardFive); `
* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the first button element's `onChange` function equal to `{(e)=>this.props.updateRealEstateAgent("True")}`.
    * Set the second button element's `onChange` function equal to `{(e)=>this.props.updateRealEstateAgent("False")}`.
* Our WizardFive Component should now be hooked up properly and be working with redux! 
* You can see what's on state by writing `console.log(this.props)` inside of the `render()` function.
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update function you just made from your reducer: `updateRealEstateAgent ` from `'./../../ducks/reducer'` (remember to destructure them). 

```js
import { updateRealEstateAgent  } from './../../ducks/reducer'

```

* Connect the WizardFive component to `redux`, similarly to how we connected our `App.js` to `redux`.
    * Create a `mapStateToProps` function, passing it `state`.
    * Return an object that contains the piece of state you'll be updating/wanting access to.
    * In the export default we'll need to access the destructured functions from our reducer like so: `export default connect(mapStateToProps, { updateRealEstateAgent  })(WizardFive); `
    
```js
function mapStateToProps( state ) {
  return { 
      realEstateAgent: state.realEstateAgent
    };
}
export default connect(mapStateToProps, { updateRealEstateAgent  })(WizardFive); 
```

* Now our component is connected to the `redux store`, let's access the function we need to change state on the input element.
    * Set the first button element's `onChange` function equal to `{(e)=>this.props.updateRealEstateAgent("True")}`.
    * Set the second button element's `onChange` function equal to `{(e)=>this.props.updateRealEstateAgent("False")}`.    
    * Because we've connected to `redux`, the updateLoanType function is now on props for this component.
* Our WizardFive Component should now be hooked up properly and be working with redux! 
    
```js
<Link to="/wSix"><button onClick={ (e)=>this.props.updateRealEstateAgent("True") }>Yes</button></Link>
<Link to="/wSix"><button onClick={ (e)=>this.props.updateRealEstateAgent("False") }>No </button></Link>
```
</details>

### Solution

<details>

<summary> <code> src/components/WizardFive/WizardFive.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateRealEstateAgent } from './../../ducks/reducer'
import { connect } from 'react-redux';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={ (e)=>this.props.updateRealEstateAgent("True") }>Yes</button></Link>
                        <Link to="/wSix"><button onClick={ (e)=>this.props.updateRealEstateAgent("False") }>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      found: state.found
    };
}
export default connect(mapStateToProps, { updateRealEstateAgent })(WizardFive); 
```

</details>


## Step 13

### Summary

Setting up the sixth view with our reducer.

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
* You can see what's on state by writing `console.log(this.props)` inside of the `render()` function.
<details>

<summary> Detailed Instructions </summary>

* Import `connect` from `react-redux`.

```js
import { connect } from 'react-redux'; 

```

* Import the update functions you just made from your reducer: `updateCost, updateDownPayment ` from `'./../../ducks/reducer'` (remember to destructure them)

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

## Step 14

### Summary

Hooking up the rest of our views to the reducer.

## Instructions 

Continue to go through the rest of the views and hook them up to the reducer like we've done in previous steps. When you're done, you should be able to see all of the data you've passed in the eleventh view.

### Solution For Seventh View

<details>

<summary> <code> src/components/WizardSeven/WizardSeven.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCredit } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>Estimate your credit score</p> <br />
                    <div className="row">
                        <Link to="/wEight"><button onClick={ (e)=>this.props.updateCredit('Excellent') }>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={ (e)=>this.props.updateCredit('Good') }>Good</button></Link>
                        <Link to="/wEight"><button onClick={ (e)=>this.props.updateCredit('Fair') }>Fair</button></Link>
                        <Link to="/wEight"><button onClick={ (e)=>this.props.updateCredit('Poor') }>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      credit: state.credit,
    };
}
export default connect(mapStateToProps, { updateCredit })(WizardSeven); 
```

</details>


### Solution For Eigth View
   
<details>

<summary> <code> src/components/WizardEight/WizardEight.js </code> </summary>


```js
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
```

</details>

### Solution For Ninth View

<details>

<summary> <code> src/components/WizardNine/WizardNine.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAddOne, updateAddTwo, updateAddThree } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>What is your address?</p> <br />
                    <input type="text" placeholder="Line One" onChange={ (e)=>this.props.updateAddOne(e.target.value) }/>
                    <input type="text" placeholder="Line Two" onChange={ (e)=>this.props.updateAddTwo(e.target.value) }/>
                    <input type="text" placeholder="Line Three" onChange={ (e)=>this.props.updateAddThree(e.target.value) }/>
               
                
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
  return { 
     addressOne: state.addressOne,
     addressTwo: state.addressTwo,
     addressThree: state.addressThree
  };
}
export default connect(mapStateToProps, { updateAddOne, updateAddTwo, updateAddThree })(WizardNine); 
```

</details>

### Solution For Tenth View

<details>

<summary> <code> src/components/WizardTen/WizardTen.js </code> </summary>


```js
import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFirstName, updateLastName, updateEmail } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p>What is your name and Email?</p> <br />
                    <input type="text" placeholder="First Name" onChange={ (e)=>this.props.updateFirstName(e.target.value) }/>
                    <input type="text" placeholder="Last Name" onChange= { (e)=>this.props.updateLastName(e.target.value) }/>
                    <input type="text" placeholder="email" onChange={ (e)=>this.props.updateEmail(e.target.value) }/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
  return { 
     firstName: state.firstName,
     lastName: state.lastName,
     email: state.email
  };
}
export default connect(mapStateToProps, { updateFirstName, updateLastName, updateEmail })(WizardTen); 
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content. 
<br />
<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">
