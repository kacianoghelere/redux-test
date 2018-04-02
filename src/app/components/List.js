import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, editItem, removeItem } from '../actions';

const styles = {
  container: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    padding: 15
  }
};

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.addNewItem = this.addNewItem.bind(this);

    this.onChangeText = this.onChangeText.bind(this);
  }

  addNewItem() {
    this.props.addItem(this.state);

    this.setState({ text: '' });
  }

  onChangeText({ target }) {
    this.setState({ text: target.value});
  }

  renderItems() {
    return this.props.list.map((item, key) => {
      return (
        <li key={key}>
          <span>{item.text}</span>
          <button onClick={() => this.props.removeItem(item)}>remover</button>
          <button onClick={() => this.props.removeItem(item)}>remover</button>
        </li>
      )
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={[styles.container, styles.form]}>
          <input type="text"
            value={this.state.text}
            onChange={this.onChangeText} />
          <button type="button" onClick={this.addNewItem}>Adicionar</button>
        </div>
        <div style={[styles.container, styles.list]}>
          <ul>
            { this.renderItems() }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({ list: store.list });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addItem,
  editItem,
  removeItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);