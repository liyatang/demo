import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from './actions'

class App extends Component {
    render() {

        const {todos, dispatch} = this.props;


        return (
            <div>
                <button onClick={this.handleAddTodo.bind(this)}>add todo</button>
                <div>
                    {todos.map(todo => <div>{todo.text}</div>)}
                </div>
                <div>{todos}</div>
            </div>
        )
    }

    handleAddTodo(e) {
        const {todos, dispatch} = this.props;
        const actions = bindActionCreators(Actions, dispatch);

        actions.addTodo('1111');
    }
}


App.propTypes = {
    todos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(App);