
export const initialState = {
    todos: []
}

export const reducer = (state = initialState ,action) => {
    switch(action.type){
        case 'GET_TODOS':{
            return state;
        }
        case 'LOAD_TODOS':{
           return ({
               ...state,
               todos: action.json
           })
        }
        default: return state;
    }
}

