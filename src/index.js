/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './redux/store';

import './index.scss';

const getMode = async () => {
  const mode = await localStorage.getItem('COLOR_MODE');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  }

  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

getMode();
