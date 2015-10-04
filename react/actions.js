import actionType from './action-types.js';


export function addTodo(text='asdfasf') {

    console.log(text);

    return {
        type: actionType.TODO_ADD,
        text
    }
}
