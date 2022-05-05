const redux = require('redux')

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter+action.amount,
            showCounter: state.showCounter
        }
    } else if(action.type === 'decrement') {
        return {
            counter: state.counter-action.amount,
            showCounter: state.showCounter
        }
    } else if(action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state
}
const store = redux.createStore(counterReducer)

export default store

