import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, RootState } from './types/';

import { CompleteTodo, DeleteTodo } from './actions/';

type myProps = {
    todos: Array<Todo>,
    CompleteTodo: (id: number) => {
        type: string,
        payload: number
    },
    DeleteTodo: (id: number) => {
        type: string,
        payload: number
    }
}

class TodoList extends Component<myProps> {

    renderTodo() {
        const RenderedTodos = this.props.todos.map( (todo: Todo, idx: number) => {
            const disabled = todo.completed ? "btn-secondary" : "btn-primary";
            return (
                <tr>
                    <th scope="row">{idx}</th>
                    <td>{todo.name}</td>
                    <td>{todo.completed ? "Done!" : "Pending"}</td>
                    <td>
                        <button
                            disabled={todo.completed ? true : false}
                            className={`btn btn-sm pl-3 pr-3 mr-3 ${disabled}`}
                            onClick={() => this.props.CompleteTodo(todo.id)}
                        >
                            Complete
                        </button>
                        <button 
                            className="btn btn-danger btn-sm pl-3 pr-3"
                            onClick={() => this.props.DeleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderedTodos}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <>
            <div className="App">
                <p className="h1 text-center pt-3 pb-4">List of TO DO items</p>
            </div>
            <div className="container w-50">
                {this.props.todos.length > 0 ? this.renderTodo() : "Begin by adding a new TO DO item!"}
            </div>
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    todos: state.TodoList
});

export default connect(mapStateToProps, { CompleteTodo, DeleteTodo })(TodoList);