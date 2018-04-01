import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './app/reducers/counterReducer';
import fieldReducer from './app/reducers/fieldReducer';

import App from './App';

const reducers = combineReducers({
  counter: counterReducer,
  field: fieldReducer
});

ReactDOM.render(
  (
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  )
  , document.getElementById('root')
);

registerServiceWorker();
