import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AddTodo } from './actions/';
import { Todo } from './types';

type myProps = {
    AddTodo: (name: string) => {
        type: string,
        payload: Todo
    }
}

type myState = {
    todo: string,
    error: boolean,
    message: boolean | string,
}

class AddItem extends Component<myProps, myState> {
    state = {
        todo: "",
        error: false,
        message: false
    }

    renderMessage() {
        if(this.state.message) {
            const error = this.state.error ? "alert alert-danger" : "alert alert-success";
            return (
                <div className={error} role="alert">
                    {this.state.message}
                </div>
            );
        }
        else {
            return null;
        }
    }

    private handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({todo: event.target.value});
    }

    private handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(this.state.todo === "") {
            this.setState({
                error: true, 
                message: "Please enter a valid TO DO item name!",
            });
        }
        else {
            this.props.AddTodo(this.state.todo);
            this.setState({
                error: false,
                message: "A new TODO item was added!",
                todo: ""
            })
        }
    }

    render() {
        return (
            <>
            <p className="h1 text-center mb-3">Add a new TO DO item</p>
            <div className="container w-50 border rounded pt-3 pb-3">
            {this.renderMessage()}
            <form
                onSubmit={(event) => this.handleForm(event)}
            >
                <div className="row p-3">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input 
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={this.state.todo}
                            onChange={(event) => this.handleInput(event)}
                        />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-12">
                        <input
                            type="submit"
                            className="btn btn-warning pl-5 pr-5"
                            value="Add"
                        />
                    </div>
                </div>
            </form>
            </div>
            </>
        );
    }
}

export default connect(null, { AddTodo })(AddItem);