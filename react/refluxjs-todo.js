{
    let {Reflux, React} = window;

    var TodoActions = Reflux.createActions([
        'addTodo',
        'getAll'
    ]);

    var TodoStore = Reflux.createStore({
        todos: [{text: 'default'}],
        listenables: [TodoActions],
        onAddTodo: function (text) {
            this.todos.push({
                text: text
            });
            this.trigger(this.todos);
        },
        getAll: function () {
            return this.todos;
        }
    });

    class TodoApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {todos: TodoStore.getAll()};
            this.mixins = [Reflux.connect(TodoStore, 'todos')];
        }

        componentDidMount() {
            this.unsubscribe = TodoStore.listen(this.onStatusChange.bind(this));
        }

        onStatusChange(status) {
            console.log(TodoStore);
            this.setState({
                todos: status
            });
        }

        render() {
            return (
                <div>
                    <button type="button" onClick={this.handleAdd.bind(this)}>add</button>
                    <div>
                        {this.state.todos}
                    </div>
                </div>
            )
        }

        handleAdd() {
            TodoActions.addTodo('work');
        }
    }




    React.render(<TodoApp />, document.getElementById('refluxTodo'));
}