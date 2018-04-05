import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './app/reducers/counterReducer';
import fieldReducer from './app/reducers/fieldReducer';
import taskListReducer from './app/reducers/taskListReducer';
import 'bootstrap-css-only/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

const reducers = combineReducers({
  counter: counterReducer,
  field: fieldReducer,
  taskList: taskListReducer
});

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  )
  , document.getElementById('root')
);

registerServiceWorker();
