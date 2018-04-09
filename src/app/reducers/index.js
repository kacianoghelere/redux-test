import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import fieldReducer from './fieldReducer';
import taskListReducer from './taskListReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    counter: counterReducer,
    field: fieldReducer,
    taskList: taskListReducer,
    users: usersReducer
});

export default reducers;