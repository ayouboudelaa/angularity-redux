import { createActions, handleActions } from 'redux-actions'

import INITIAL_STATE from '../../app.state'

const actions = createActions({
    app: {
        products: {
            FETCH: resource => resource.getAll(),
            FETCH_SUCCESS: products => products,
            FETCH_FAILURE: error => error,
            RESET: () => { }
        }
    }
})

export const fetchProducts = actions.app.products.fetch
export const fetchProductsSuccess = actions.app.products.fetchSuccess
export const fetchProductsFailure = actions.app.products.fetchFailure
export const resetProducts = actions.app.products.reset

const reducer = handleActions({
    [fetchProducts](state) {
        return { items: [], error: null, isFetching: true }
    },
    [fetchProductsSuccess](state, { payload }) {
        return { items: payload, error: null, isFetching: false }
    },
    [fetchProductsFailure](state, { payload }) {
        return { items: [], error: payload, isFetching: false }
    },
    [resetProducts](state) {
        return { items: [], error: null, isFetching: false }
    }
}, INITIAL_STATE)

export default reducer
