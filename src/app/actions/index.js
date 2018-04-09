import axios from 'axios';


export const DECREMENT = 'DECREMENT';

export const decrementValue = () => ({ type: DECREMENT });


export const INCREMENT = 'INCREMENT';

export const incrementValue = () => ({ type: INCREMENT });


export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (event) => ({
  type: CHANGE_VALUE,
  payload: event.target.value
});


export const ADD_TASK = 'ADD_TASK';

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload
});


export const REMOVE_TASK = 'REMOVE_TASK';

export const removeTask = (payload) => ({
  type: REMOVE_TASK,
  payload
});


export const TOGGLE_TASK = 'TOGGLE_TASK';

export const toggleTask = (payload) => ({
  type: TOGGLE_TASK,
  payload
});


export const CHANGE_EDITOR_TEXT = 'CHANGE_EDITOR_TEXT';

export const changeEditorText = (payload) => ({
  type: CHANGE_EDITOR_TEXT,
  payload
});


export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';

export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: axios.get('https://randomuser.me/api/?nat=br&results=5')
});
