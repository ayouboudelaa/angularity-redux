import { combineReducers } from 'redux'
import { router } from 'redux-ui-router'

import INITIAL_STATE from './app.state'
// Reducers.
import counter from './components/dashboard/counter'
import productDetails from './components/product-details/product-details'
import productsList from './components/products-list/products-list'


const rootReducer = combineReducers({
    counter,
    currentProduct: productDetails,
    productsList,
    router
})

export default rootReducer
