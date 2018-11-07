import {combineReducers} from 'redux';
import {TodoListReducer} from '../reducers/todoReducers';

const rootReducer = combineReducers({
    todos: TodoListReducer
})

export default rootReducer;