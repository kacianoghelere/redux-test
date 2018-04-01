import React, { Component } from 'react';

import Counter from './app/components/Counter';
import Field from './app/components/Field';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Field />
      </div>
    );
  }
}

export default App;
