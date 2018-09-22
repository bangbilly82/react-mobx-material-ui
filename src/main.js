import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
// import { observable } from "mobx";

// Import Store
import store from './store/store';

// Our main routes components
import Routes from './routes/routes';

// Global Style CSS
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
document.getElementById('app-container'));