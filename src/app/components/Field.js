import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeValue } from '../actions';

const styles = {
  field: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    padding: 15
  }
};

class Field extends React.Component {
  render() {
    return (
      <div style={styles.field}>
        <p>{this.props.value}</p>
        <input type="text"
          value={this.props.value}
          onChange={this.props.changeValue} />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({ value: store.field.value });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Field);