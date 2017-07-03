import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>    
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();