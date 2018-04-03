import {
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  SET_EDITOR_TEXT,
  UPDATE_ITEM
} from '../actions';

const INITITAL_STATE = {
  uuid: 1,
  editorTarget: {
    text: '',
    uuid: 1
  },
  isEditing: false,
  items: []
};

const listReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!action.payload || !action.payload.text) {
        return state;
      }

      const { items } = state;

      const newUuid = state.uuid + 1;

      return {
        ...state,
        uuid: newUuid,
        editorTarget: { text: '', newUuid },
        items: [
          ...items,
          action.payload
        ]
      };
    case EDIT_ITEM:
      return {
        ...state,
        editorTarget: action.payload,
        isEditing: true
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload)
      };
    case SET_EDITOR_TEXT:
      return {
        ...state,
        editorTarget: {text: action.payload}
      };
    case UPDATE_ITEM:
      const { uuid } = state;

      const { payload } = action;

      return {
        ...state,
        editorTarget: { text: '', uuid },
        isEditing: false,
        items: state.items.map((item) => {
          return (item.uuid === payload.uuid) ? payload : item;
        })
      };
    default:
      return state;
  }
};

export default listReducer;
