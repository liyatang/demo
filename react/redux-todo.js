{
    let {React, Redux, ReactRedux} = window;
    let bindActionCreators = Redux.bindActionCreators;
    let {Provider, connect} = ReactRedux;

    const initialtate = {
        todos: [{text: 'default'}]
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

    class TodoApp extends React.Component {
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

    let WrapTodoApp = connect(function (state) {
        return {
            todos: state.todos
        };
    })(TodoApp);

    React.render(
        <Provider store={store}>
            {() => <WrapTodoApp></WrapTodoApp>}
        </Provider>,
        document.getElementById('reduxTest')
    );
}
