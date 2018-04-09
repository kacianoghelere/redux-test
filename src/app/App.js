import React, { Component } from 'react';

import Counter from './components/Counter';
import Field from './components/Field';
import TodoList from './components/TodoList';
import AsyncList from './components/AsyncList';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Field />
        <TodoList />
        <AsyncList />
      </div>
    );
  }
}

export default App;
