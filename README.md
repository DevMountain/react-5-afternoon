<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This is a working project that currently only utilizes state and props to pass its data. Before getting started, try to get familiar with the code and see how props are being passed through to different components. In particular, take a look at the App.js. You'll notice the App.js is 127 lines of code, during this project and using `redux`, we'll be able to turn those 127 lines of code into 27.

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

import reducer from "./ducks/reducer";"
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

Now our App is connected with redux, let's think about what needs to have access to our state in our first view: `WizardOne.js`. It looks like we need to be able to update the loanType and propertyType items on state. In redux, in order to update something, we need to have an action and a reducer, so let's go to our `src/reducer.js`.

## Instructions

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
* At the bottom of the file `export default reducer`. This reducer will take place in actually manipulating state once we put some cases in it. 
* Above the reducer we're going to make two const's, one called `UPDATE_LOAN_TYPE ` set equal to a string `"UPDATE_LOAN_TYPE "`, the other called `UPDATE_PROPERTY_TYPE ` set equal to a string `"UPDATE_PROPERTY_TYPE "`. 
    * We do this because react will throw an error if a variable is misspelled, but not if a string is misspelled.
* Now let's set up the `action` that will connect to the `reducer`:
    * `Actions` will be exported functions, below the reducer function, export a function called `updateLoanType`, pass it `loanType`. 
    * All of our `actions` will return an object with a `type` and `payload`.
    * Return and object with `type: UPDATE_LOAN_TYPE` and `payload: loanType`. `UPDATE_LOAN_TYPE` is equal to the string in that const we set before, `loanType` is a parameter in the function that serves as what we want to actually change on state.
* The action needs a reducer now that will change the state. Inside of the reducer function, create a switch statement, passing it action.type as a parameter. 
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

## Step 6

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
* Go to the second select element's `onChange` even and set it equal to `(e)=>this.props.updatePropertyType(e.target.value)}`
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


## Step 7

### Summary

Now that we have our first view hooked up. Let's move onto the second View.

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



## Step 8
### Summary

Now that we have our second view hooked up. Let's move onto the third View.

## Instructions
In the `src/ducks/reducer.js`

* Create a new const: `const UPDATE_PROP  = 'UPDATE_PROP ';`
* Create an action for updating the city:
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

* Create an action for updating the city:
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

## Step 9

### Summary

Now that we have our third view hooked up. Let's move onto the fourth View.

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