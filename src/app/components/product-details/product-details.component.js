import {
    fetchProduct,
    fetchProductSuccess,
    fetchProductFailure,
    resetCurrentProduct
} from './current-product'

class ProductDetailsComponent {
    constructor($ngRedux, ProductService) {
        'ngInject'

        this._$ngRedux = $ngRedux
        this._ProductService = ProductService
    }

    $onInit() {
        this._unsubscribe = this._$ngRedux.connect(
            state => ({ currentProduct: state.currentProduct, router: state.router }),
            dispatch => ({
                fetchProduct: (id) => {
                    dispatch(fetchProduct(this._ProductService, id)).then(response => {
                        response.error ?
                            dispatch(fetchProductFailure(response.payload)) :
                            dispatch(fetchProductSuccess(response.payload))
                    })
                }
            })
        )(this)

        this.fetchProduct(this.router.currentParams.id)
    }

    $OnDestroy() {
        this._unsubscribe()
    }
}

export default {
    restrict: 'E',
    template: require('./product-details.component.html'),
    controller: ProductDetailsComponent,
    controllerAs: 'self'
}
