import {
    fetchProducts,
    fetchProductsSuccess,
    fetchProductsFailure,
    resetProducts
} from './products'

class ProductsListComponent {
    constructor($ngRedux, ProductService) {
        'ngInject'

        this._$ngRedux = $ngRedux
        this._ProductService = ProductService
    }

    $onInit() {
        this._unsubscribe = this._$ngRedux.connect(
            state => ({ products: state.products }),
            dispatch => ({
                fetchProducts: () => {
                    // We must use redux-promise instead of redux-thunk.
                    dispatch(fetchProducts(this._ProductService))
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
