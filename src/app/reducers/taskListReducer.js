import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CHANGE_EDITOR_TEXT
} from '../actions';

const INITITAL_STATE = {
  editorText: '',
  tasks: []
};

const changeEditorText = (state, { payload }) => {
  return {
    ...state,
    editorText: payload
  };
};

const addTask = (state, { payload }) => {
  if (!payload) {
    return state;
  }

  const newTasks = state.tasks.slice();

  return {
    ...state,
    editorText: '',
    tasks: [
      ...newTasks,
      {
        text: payload,
        done: false
      }
    ]
  };
};

const removeTask = (state, { payload }) => {
  const newTasks = state.tasks.slice();

  return {
    ...state,
    tasks: newTasks.filter((task, index) => index !== payload)
  };
};

const toggleTask = (state, { payload }) => {
  const newTasks = state.tasks.slice();

  return {
    ...state,
    tasks: newTasks.map((task, index) => {
      if (index === payload) {
        return {
          ...task,
          done: !task.done
        };
      }

      return task;
    })
  };
};

const taskListReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EDITOR_TEXT:
      return changeEditorText(state, action);
    case ADD_TASK:
      return addTask(state, action);
    case REMOVE_TASK:
      return removeTask(state, action);
    case TOGGLE_TASK:
      return toggleTask(state, action);
    default:
      return state;
  }
};

export default taskListReducer;
