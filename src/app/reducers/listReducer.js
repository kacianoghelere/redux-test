import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../actions';

const INITITAL_STATE = [];

const listReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!action.payload || !action.payload.text) {
        return state;
      }

      return [
        ...state,
        action.payload
      ];
    case EDIT_ITEM:
      return state.map((item) => ({
        ...item,
        ...action.payload
      }));
    case REMOVE_ITEM:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default listReducer;