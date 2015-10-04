import React from 'react';
import {createStore} from 'redux';
import reduces from './reduces';
import Todo from './todo'
import {Provider} from 'react-redux';

const store = createStore(reduces);

React.render(
    <Provider store={store}>
        {() => <Todo />}
    </Provider>,
    document.getElementById('myTodoApp')
);