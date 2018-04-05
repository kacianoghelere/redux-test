import React, { Component } from 'react';

import Counter from './app/components/Counter';
import Field from './app/components/Field';
import TodoList from './app/components/TodoList';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Field />
        <TodoList />
      </div>
    );
  }
}

export default App;
