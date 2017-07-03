<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

During this project, we'll be building a web application that walks users through filling out a home loan application. We'll be building out the components that have already been made and make them better with `redux`. To keep track of data and pass it to the correct components we'll make heavy use of `redux` and `react-redux`. We'll be making changes to all files in the components folder except for Finish.js to help them work with Redux, as well as the router.js, store.js, reducer.js, index.js and App.js.

## Setup

* `fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm i`.
* Run `npm start`.

## Step 1

### Summary

In this step, we will create our `store`. 
When using redux, the store holds the entire state of our application. So it's important we set this up first.

## Instructions

* `npm install --save redux-promise-middleware`.
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

import reducer from "./ducks/reducer";";
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
