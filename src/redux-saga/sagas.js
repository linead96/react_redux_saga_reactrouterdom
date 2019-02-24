import {put, takeEvery, all} from 'redux-saga/effects'

export function* loadTodoAsync(){

    const json = yield fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json(),);

    yield put({
        type: 'LOAD_TODOS', json,
    });
}

export function* watchLoadTodos() {
    yield takeEvery('GET_TODOS',loadTodoAsync)
}

export default function* rootSaga(){
    yield all([
        watchLoadTodos()
    ])
}