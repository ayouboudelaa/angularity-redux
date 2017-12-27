import angular from 'angular'

import NgResourceModule from 'angular-resource'

import Http from './http'

class ProductService extends Http {
    constructor($resource, API_ENDPOINT) {
        'ngInject'
        super($resource, `${API_ENDPOINT}/products`)
    }
}


export default angular
    .module('app.http', [NgResourceModule])
    .service('ProductService', ProductService)
    .name