import { createActions, handleActions } from 'redux-actions'

import INITIAL_STATE from '../../app.state'

const actions = createActions({
    app: {
        counter: {
            INCREMENT: () => { },
            DECREMENT: () => { }
        }
    }
})

export const incrementCounter = actions.app.counter.increment
export const decrementCounter = actions.app.counter.decrement

const reducer = handleActions({
    [incrementCounter](state) {
        return state + 1
    },
    [decrementCounter](state) {
        return state - 1
    }
}, INITIAL_STATE)

export default reducer
