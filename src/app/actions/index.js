import {
  DECREMENT,
  INCREMENT,
  CHANGE_VALUE,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CHANGE_EDITOR_TEXT
} from './actioNames';

export const decrementValue = () => ({ type: DECREMENT });

export const incrementValue = () => ({ type: INCREMENT });

export const changeValue = (event) => ({
  type: CHANGE_VALUE,
  payload: event.target.value
});

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload
});

export const removeTask = (payload) => ({
  type: REMOVE_TASK,
  payload
});

export const toggleTask = (payload) => ({
  type: TOGGLE_TASK,
  payload
});

export const changeEditorText = (payload) => ({
  type: CHANGE_EDITOR_TEXT,
  payload
});
