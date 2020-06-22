import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux files
// ----------------
// Function to create the store
import {createStore} from 'redux';
// Provider component from react-redux library
import {Provider} from 'react-redux';
// Reducer created for this example
import exampleReducer from './RedEx';

// The "store" is responsable for saving data for the redux flow
const storeExample = createStore(exampleReducer)

ReactDOM.render(
  // Here we added the store to the Provider
  // The Provider component lets all components
  // inside of it access the store data
  <Provider store={storeExample}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
