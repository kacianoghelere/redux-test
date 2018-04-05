import React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import {
  addTask,
  removeTask,
  changeEditorText,
  toggleTask
} from '../actions';

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);

    this.onChangeText = this.onChangeText.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();

    const { editorText } = this.props.taskList;

    this.props.addTask(editorText);
  }

  onChangeText({ target }) {
    this.props.changeEditorText(target.value);
  }

  handleTaskToggle(index) {
    this.props.toggleTask(index);
  }

  handleRemoveTask(index) {
    console.log('handleRemoveTask', index);
    this.props.removeTask(index);
  }

  renderItems() {
    const { tasks } = this.props.taskList;

    return tasks.map((task, index) => {
      const id = `task-${index}`;

      return (
        <ListGroupItem className="d-flex justify-content-between" key={index}>
          <h4 className="custom-control custom-checkbox align-items-center">
            <Input
              className="custom-control-input m-0"
              type="checkbox"
              id={id}
              checked={task.done}
              onChange={() => this.handleTaskToggle(index)} />
            <Label className="custom-control-label" for={id}>
              {task.text}
            </Label>
          </h4>
          <Button
              color="secondary"
              onClick={() => this.handleRemoveTask(index)}
              outline >
            <i className="fa fa-trash"></i>
          </Button>
        </ListGroupItem>
      )
    });
  }

  renderTaskForm() {
    const { editorText } = this.props.taskList;

    return (
      <Form onSubmit={this.onSubmitHandler} inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="todoText" className="mr-sm-2">I need to...</Label>
          <Input
            type="text"
            name="todoText"
            id="todoText"
            placeholder="This weekend I'll do something cool!"
            value={editorText}
            onChange={this.onChangeText} />
        </FormGroup>
        <Button>Add Task</Button>
      </Form>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-6 mx-md-auto">
          <Card>
            <CardBody>
              { this.renderTaskForm() }
            </CardBody>
            <ListGroup className="list-group-flush">
              { this.renderItems() }
            </ListGroup>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({ taskList: store.taskList });

const mapDispatchToProps = {
  addTask,
  removeTask,
  changeEditorText,
  toggleTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
