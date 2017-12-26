import { fetchProduct, fetchProductSuccess, fetchProductFailure, resetCurrentProduct } from './product-details'

class ProductDetailsComponent {
    constructor($ngRedux, $stateParams, productService) {
        'ngInject'

        this._$ngRedux = $ngRedux
        this._$stateParams = $stateParams
        this._productService = productService
    }

    $onInit() {
        this._unsubscribe = this._$ngRedux.connect(
            state => ({ currentProduct: state.currentProduct }),
            dispatch => ({
                fetchProduct: (id) => {
                    dispatch(fetchProduct(this._productService, id)).then(response => {
                        response.error ?
                            dispatch(fetchProductFailure(response.payload)) :
                            dispatch(fetchProductSuccess(response.payload))
                    })
                }
            })
        )(this)

        this.fetchProduct(this._$stateParams.id)
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
