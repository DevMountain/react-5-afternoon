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

* Import `connect` from `react-redux`
* At the bottom of the page make a function called `mapStateToProps`, pass it `state`, then return `state`
* Instead of having `export default App`, we're going to be using `connect` to connect the `App.js` to the `redux` store. `export default connect(mapStateToProps)(App);`

Now our App is connected with redux, let's think about what needs to have access to our state in our first view: `WizardOne.js`. It looks like we need to be able to update the loanType and propertyType items on state. In redux, in order to update something, we need to have an action and a reducer, so let's go to our `src/reducer.js`.

* Create a function called reducer and pass it state equal to initial state and an action
* At the bottom of the file `export default reducer`. This reducer will take place in actually manipulating state once we put some cases in it. 
* Above the reducer we're going to make two const's, one called `UPDATE_LOAN_PROP_TYPE` set equal to a string `"UPDATE_LOAN_PROP_TYPE"`.


<details>

<summary> Detailed Instructions </summary>

</details>

### Solution

<details>

<summary> <code> src/.js </code> </summary>

</details>
