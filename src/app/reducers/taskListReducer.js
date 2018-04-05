import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CHANGE_EDITOR_TEXT
} from '../actions/actioNames';

const INITITAL_STATE = {
  editorText: '',
  tasks: []
};

const taskListReducer = (state = INITITAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case CHANGE_EDITOR_TEXT:
      console.log(CHANGE_EDITOR_TEXT, payload);
      return {
        ...state,
        editorText: payload
      };
    case ADD_TASK:
      console.log(ADD_TASK, payload);
      if (!payload) {
        return state;
      }

      const { tasks } = state;

      return {
        ...state,
        editorText: '',
        tasks: [
          ...tasks,
          {
            text: payload,
            done: false
          }
        ]
      };
    case REMOVE_TASK:
      console.log(REMOVE_TASK, payload);
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== payload)
      };
    case TOGGLE_TASK:
      console.log(TOGGLE_TASK, payload);
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === payload) {
            return {
              ...task,
              done: !task.done
            };
          }

          return task;
        })
      };
    default:
      return state;
  }
};

export default taskListReducer;
