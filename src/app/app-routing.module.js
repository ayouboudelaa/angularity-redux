import angular from 'angular'
import ReduxUiRouterModule from 'redux-ui-router'

import UiRouterModule from '@uirouter/angularjs'

const ROUTES = [
    {
        name: 'about',
        config: {
            url: '/about',
            views: {
                'main@': {
                    component: 'about',
                    bindings: {}
                }
            }
        }
    }, {
        name: 'dashboard',
        config: {
            url: '/dashboard',
            views: {
                'main@': {
                    component: 'dashboard',
                    bindings: {}
                }
            }
        }
    }, {
        name: 'products',
        config: {
            url: '/products',
            views: {
                'main@': {
                    component: 'productsList',
                    bindings: {}
                }
            }
        }
    }, {
        name: 'products.productDetails',
        config: {
            url: '/:id',
            views: {
                'main@': {
                    component: 'productDetails',
                    bindings: {}
                }
            }
        }
    },
]

export default angular
    .module('app.routing', [
        UiRouterModule,
        ReduxUiRouterModule
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        'ngInject'

        $locationProvider.html5Mode(true).hashPrefix('!')
        $urlRouterProvider.otherwise('/')
        
        ROUTES.forEach(route => $stateProvider.state(route.name, route.config))
    })
    .name
