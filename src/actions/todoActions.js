let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text,
        id: nextTodoId++
        }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

