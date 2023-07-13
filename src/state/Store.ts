import { applyMiddleware, createStore } from 'redux'
import TodoReduce from './reducers/Reducer'
import thunk from 'redux-thunk'

const store = createStore(TodoReduce, applyMiddleware(thunk))
export default store