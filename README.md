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

Instead of just taking everything out of our App.js and router files all at once, let's go one view at a time. Let's go check out our router.js first. This view is almost as messy as our `App.js`. 

Because we needed to pass state down to our routes, we had to make our routing a function. Currently, we're exporting a function by default in our `router.js`, by making this a function, we were able to import it into our `App.js` and then pass it props through its arguments. 

In addition to our route component being a function, the way we're connecting our `Route` to the correct component is using a `render={()=> <Component prop={prop}/> path='/'}` instead of a `component={Component} path='/'`. The reason we needed to use render this way was so we could pass props down through the Components element. However, this results in messy looking code, so let's clean it up.

## Instructions

* Export default our router without making it a function.
* Import `HashRouter` from `react-router-dom`.
    * Instead of using `Switch`, we're going to use `HashRouter` from `react-router-dom` to wrap our routes. (HashRouter uses the hash portion of our URL to keep our UI in sync with the URL when we change views).
* Wrap routes in a div, HashRouter can only have one first level element, so we will nest our routes inside of the div. 
* For each individual route, instead of using render, we will be using component. A route should look like the following: `<Route component={WizardOne}  path='/wOne'/>`


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
</details>


### Solution

<details>

<summary> <code> src/index.js </code> </summary>

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