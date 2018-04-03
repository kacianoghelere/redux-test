import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  editItem,
  removeItem,
  setEditorText,
  updateItem
} from '../actions';

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

    this.addNewItem = this.addNewItem.bind(this);

    this.updateItem = this.updateItem.bind(this);

    this.onChangeText = this.onChangeText.bind(this);
  }

  addNewItem() {
    const { editorTarget } = this.props.list;

    this.props.addItem(editorTarget);
  }

  updateItem() {
    const { editorTarget } = this.props.list;

    this.props.updateItem(editorTarget);
  }

  onChangeText({ target }) {
    this.props.setEditorText(target.value);
  }

  renderItems() {
    const { items } = this.props.list;

    return items.map((item, key) => {
      return (
        <li key={key}>
          <span>{item.text}</span>
          <button onClick={() => this.props.editItem(item)}>alterar</button>
          <button onClick={() => this.props.removeItem(item)}>remover</button>
        </li>
      )
    });
  }

  renderSubmit() {
    const { isEditing } = this.props.list;

    if (isEditing) {
      return <button type="button" onClick={this.updateItem}>Atualizar</button>;
    }

    return <button type="button" onClick={this.addNewItem}>Adicionar</button>;
  }

  render() {
    const { editorTarget } = this.props.list;

    return (
      <div style={styles.container}>
        <div style={[styles.container, styles.form]}>
          <input type="text"
            value={editorTarget.text}
            onChange={this.onChangeText} />
          { this.renderSubmit() }
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

const mapDispatchToProps = {
  addItem,
  editItem,
  removeItem,
  setEditorText,
  updateItem
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
