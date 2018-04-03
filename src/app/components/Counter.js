import React from 'react';
import { connect } from 'react-redux';

import { decrementValue, incrementValue } from '../actions';

const styles = {
  counter: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    padding: 15
  }
};

class Counter extends React.Component {
  render() {
    return (
      <div style={styles.counter}>
        <p>{this.props.value}</p>
        <button type="button" onClick={this.props.incrementValue}>+1</button>
        <button type="button" onClick={this.props.decrementValue}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  value: store.counter.value
});

const mapDispatchToProps = {
  decrementValue,
  incrementValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);