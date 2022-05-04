const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter+action.amount
        }
    } else if(action.type === 'decrement') {
        return {
            counter: state.counter-action.amount
        }
    }
    return state
}
const store = redux.createStore(counterReducer)

export default store

