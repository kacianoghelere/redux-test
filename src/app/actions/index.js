export const ADD_ITEM = 'ADD_ITEM';

export const EDIT_ITEM = 'EDIT_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const DECREMENT = 'DECREMENT';

export const INCREMENT = 'INCREMENT';

export const decrementValue = () => ({ type: DECREMENT });

export const incrementValue = () => ({ type: INCREMENT });

export const changeValue = (event) => ({
  type: CHANGE_VALUE,
  payload: event.target.value
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const editItem = (item) => ({
  type: EDIT_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
});