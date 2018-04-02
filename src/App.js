import React, { Component } from 'react';

import Counter from './app/components/Counter';
import Field from './app/components/Field';
import List from './app/components/List';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Field />
        <List />
      </div>
    );
  }
}

export default App;
