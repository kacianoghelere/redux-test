import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import 'bootstrap-css-only/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import store from './app/store';
import App from './app/App';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

registerServiceWorker();