import { CHANGE_VALUE } from '../actions/actioNames';

const INITITAL_STATE = { value: '' };

const counterReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { value: action.payload };
    default:
      return state;
  }
};

export default counterReducer;