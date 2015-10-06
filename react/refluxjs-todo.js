{
    let {Reflux, React} = window;

    var Actions = Reflux.createActions([
        'addTodo'
    ]);

    var Store = Reflux.createStore({
        todos: [{text: 'default'}],
        listenables: [Actions],
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
            this.state = {todos: Store.getAll()};
            this.mixins = [Reflux.connect(Store, 'todos')];
        }

        componentDidMount() {
            this.unsubscribe = Store.listen(this.onStatusChange.bind(this));
        }

        onStatusChange(status) {
            console.log(Store);
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
            Actions.addTodo('work');
        }
    }

    React.render(<TodoApp />, document.getElementById('refluxTest'));
}