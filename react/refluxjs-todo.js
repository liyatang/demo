let Reflux = window.Reflux;

var Actions = Reflux.createActions([
    'addTodo'
]);

var Store = Reflux.createStore({
    todos: [],
    listenables: [Actions],
    onAddTodo: function (text) {
        this.todos.push({
            text: text
        });
        this.trigger(this.todos);
    }
});


var TodoApp = React.createClass({
    mixins: [Reflux.connect(Store, 'todos')],
    getInitialState: function () {
        return {todos: []};
    },
    render: function () {
        return (
            <div>
                <button type="button" onClick={this.handleAdd.bind(this)}>add</button>
                <div>
                    {this.state.todos}
                </div>
            </div>
        )
    },
    handleAdd: function () {
        Actions.addTodo('work');
    }
});

React.render(<TodoApp />, document.getElementById('test'));