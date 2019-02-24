export const getTodos = () => {
    return({
        type: 'GET_TODOS'
    })
}

export const loadTodos = (todos) => {
    return({
        type: 'LOAD_TODOS',
    })
}