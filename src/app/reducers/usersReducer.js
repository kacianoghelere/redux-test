import { FETCH_USERS_FULFILLED } from '../actions';

const INITITAL_STATE = [];

const usersReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      return action.payload.data.results;
    default:
      return state;
  }
};

export default usersReducer;
