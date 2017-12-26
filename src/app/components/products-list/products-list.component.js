import { fetchProducts, fetchProductsSuccess, fetchProductsFailure, resetProducts } from './products-list'

class ProductsListComponent {
    constructor($ngRedux, productService) {
        'ngInject'

        this._$ngRedux = $ngRedux
        this._productService = productService
    }

    $onInit() {
        this._unsubscribe = this._$ngRedux.connect(
            state => ({ productsList: state.productsList }),
            dispatch => ({
                fetchProducts: () => {
                    // We must use redux-promise instead of redux-thunk.
                    dispatch(fetchProducts(this._productService))
                        .then(response => {
                            response.error ?
                                dispatch(fetchProductsFailure(response.payload)) :
                                dispatch(fetchProductsSuccess(response.payload))
                        })
                }
            })
        )(this)

        this.fetchProducts()
    }

    $onDestroy() {
        this._unsubscribe()
    }
}

export default {
    restrict: 'E',
    template: require('./products-list.component.html'),
    controller: ProductsListComponent,
    controllerAs: 'self'
}
