import { createActions, handleActions } from 'redux-actions'
import INITIAL_STATE from '../../app.state'

const actions = createActions({
    app: {
        currentProduct: {
            FETCH: (resource, id) => resource.get(id),
            FETCH_SUCCESS: currentProduct => currentProduct,
            FETCH_FAILURE: error => error,
            RESET_CURRENT: () => { }
        }
    }
})

export const fetchProduct = actions.app.currentProduct.fetch
export const fetchProductSuccess = actions.app.currentProduct.fetchSuccess
export const fetchProductFailure = actions.app.currentProduct.fetchFailure
export const resetCurrentProduct = actions.app.currentProduct.resetCurrent


const reducer = handleActions({
    [fetchProduct](state) {
        return { item: null, error: null, isFetching: true }
    },
    [fetchProductSuccess](state, { payload }) {
        return { item: payload, error: null, isFetching: false }
    },
    [fetchProductFailure](state, { payload }) {
        return { item: null, error: payload, isFetching: false }
    },
    [resetCurrentProduct](state) {
        return { item: null, error: null, isFetching: false }
    }
}, INITIAL_STATE)

export default reducer
