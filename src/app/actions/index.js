export const CHANGE_VALUE = 'CHANGE_VALUE';

export const DECREMENT = 'DECREMENT';

export const INCREMENT = 'INCREMENT';

export const decrementValue = () => ({ type: DECREMENT });

export const incrementValue = () => ({ type: INCREMENT });

export const changeValue = (event) => ({
  type: CHANGE_VALUE,
  payload: event.target.value
});