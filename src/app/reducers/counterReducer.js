import { DECREMENT, INCREMENT } from '../actions';

const INITITAL_STATE = { value: 0 };

const counterReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case DECREMENT:
      return { value: state.value - 1 };
    case INCREMENT:
      return { value: state.value + 1 };
    default:
      return state;
  }
};

export default counterReducer;