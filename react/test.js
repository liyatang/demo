
let React = window.React;
let Redux = window.Redux;


let reducer = function (state = {todos:[{text: 'default'}]}, action = {}) {
    switch (action.type){
        case 'add':
            return {
                todos: [
                    ...state.todos,
                    {
                        text: 'hello'
                    }
                ]
            };
        default :
            return state;
    }
};

let store = Redux.createStore(reducer);

class TodoApp extends React.Component{

    render(){
        return (
            <div>
                <button type="button" onClick={this.handleAdd}>add</button>
                <div>
                    {this.props.todos}
                </div>
            </div>
        );
    }

    handleAdd(){
        store.dispatch({
            type: 'add',
            text: +new Date()
        });
    }
}

React.render(<TodoApp todos={store.getState()}></TodoApp>, document.getElementById('test'));

store.subscribe(function () {
    React.render(<TodoApp todos={store.getState()}></TodoApp>, document.getElementById('test'));
});