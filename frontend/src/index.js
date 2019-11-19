import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer/Reducer.js';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
	console.log('Prev State', store.getState())
	console.log('Action', action)
	
	// moves us to the next middleware function
	next(action)

	console.log('New State', store.getState())
}

const store = createStore (
    reducer,
    applyMiddleware(thunk,logger),
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider>,
    document.getElementById('root')
);
