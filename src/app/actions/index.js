export const ADD_ITEM = 'ADD_ITEM';

export const EDIT_ITEM = 'EDIT_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const RESET_LIST_EDITING = 'RESET_LIST_EDITING';

export const SET_EDITOR_TEXT = 'SET_EDITOR_TEXT';

export const UPDATE_ITEM = 'UPDATE_ITEM';

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const DECREMENT = 'DECREMENT';

export const INCREMENT = 'INCREMENT';

export const decrementValue = () => ({ type: DECREMENT });

export const incrementValue = () => ({ type: INCREMENT });

export const changeValue = (event) => ({
  type: CHANGE_VALUE,
  payload: event.target.value
});

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload
});

export const editItem = (payload) => ({
  type: EDIT_ITEM,
  payload
});

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload
});

export const resetListEditing = () => ({
  type: RESET_LIST_EDITING
});

export const setEditorText = (payload) => ({
  type: SET_EDITOR_TEXT,
  payload
});

export const updateItem = (payload) => ({
  type: UPDATE_ITEM,
  payload
});
