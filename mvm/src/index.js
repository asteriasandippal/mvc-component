import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router} from 'react-router-dom';

import { createStore } from 'redux';
import { increment } from './reducers';
import { Provider } from 'react-redux';

let store  = createStore(increment);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
