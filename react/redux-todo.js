let React = window.React;
let Redux = window.Redux;
let bindActionCreators = Redux.bindActionCreators;
let Provider = ReactRedux.Provider;
let connect = ReactRedux.connect;

const initialtate = {
    todos: []
};

let reducer = function (state = initialtate, action = {}) {
    switch (action.type) {
        case 'add':
            return {
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                ]
            };
        default :
            return state;
    }
};

let Actions = {
    addTodo: function (text) {
        return {
            type: 'add',
            text
        }
    }
};

let store = Redux.createStore(reducer);

class Todo extends React.Component {
    render() {

        return (
            <div>
                <button type="button" onClick={this.handleAdd.bind(this)}>add</button>
                <div>
                    {this.props.todos}
                </div>
            </div>
        );
    }

    handleAdd() {
        const {dispatch} = this.props;
        const actions = bindActionCreators(Actions, dispatch);
        actions.addTodo('work');
    }
}

let WrapApp = connect(function (state) {
    return {
        todos: state.todos
    };
})(Todo);

React.render(
    <Provider store={store}>
        {() => <WrapApp></WrapApp>}
    </Provider>,
    document.getElementById('test')
);

