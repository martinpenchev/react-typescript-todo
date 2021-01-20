import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

import { Todo } from '../types/';

type ACTIONTYPE = {type: string, payload: Todo} | {type: string, payload: number}

const TodoReducer = (state: Array<Todo> = [], action: ACTIONTYPE) => {
    const { type, payload } = action

    switch (type) {
        case ActionTypes.ADD_TODO:
            return [...state, payload];
        case ActionTypes.COMPLETE_TODO:
            return state.map( (todo: Todo) => (todo.id === payload) ? {...todo, completed: true, } : todo);
        case ActionTypes.DELETE_TODO:
            return state.filter( (todo: Todo) => todo.id !== payload);
        default:
            return state;
    }
}

export default combineReducers({
    TodoList: TodoReducer,
});