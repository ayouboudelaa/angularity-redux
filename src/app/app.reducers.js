import { combineReducers } from 'redux'
import { router } from 'redux-ui-router'

import INITIAL_STATE from './app.state'
// Reducers.
import counter from './components/dashboard/counter'
import currentProduct from './components/product-details/current-product'
import products from './components/products-list/products'


const rootReducer = combineReducers({
    counter,
    currentProduct,
    products,
    router
})

export default rootReducer
