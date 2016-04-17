import { createStore } from 'redux'
import rootReducer from '../reducers/todos'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    return store
}