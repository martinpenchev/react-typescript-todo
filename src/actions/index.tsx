export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

let nextTodoId = 0;
export const AddTodo = (name: string) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        id: nextTodoId++,
        name,
        completed: false
    }
});

export const CompleteTodo = (id: number) => ({
    type: ActionTypes.COMPLETE_TODO,
    payload: id
})

export const DeleteTodo = (id: number) => ({
    type: ActionTypes.DELETE_TODO,
    payload: id
});