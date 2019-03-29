import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import axios from "axios";

import App from './components/app';
import reducers from './reducers';

import "./styles.css";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>, rootElement);
