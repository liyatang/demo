import {combineReducers} from 'redux';
import actionType from './action-types';
import moment from 'moment';

var todos = function (state = [], action) {

    switch (action.type) {
        case actionType.TODO_ADD:
            return [
                ...state,
                {
                    id: +moment(),
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

export default combineReducers({
    todos
});
