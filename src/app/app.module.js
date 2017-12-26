import angular from 'angular'

import NgCookiesModule from 'angular-cookies'
import NgMaterialModule from 'angular-material'
import NgMessagesModule from 'angular-messages'
import NgReduxModule from 'ng-redux'
import NgSanitizeModule from 'angular-sanitize'

import AppRoutingModule from './app-routing.module'
import ComponentsModule from './components/components.module'
import HttpModule from './http.module'

import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import promise from 'redux-promise'

import appComponent from './app.component'
import INITIAL_STATE from './app.state'
import rootReducer from './app.reducers'

angular
    .module('app', [
        NgCookiesModule,
        NgMaterialModule,
        NgMessagesModule,
        NgReduxModule,
        NgSanitizeModule,
        AppRoutingModule,
        ComponentsModule,
        HttpModule
    ])
    .config(($mdThemingProvider, $ngReduxProvider) => {
        'ngInject'

        $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink')

        $ngReduxProvider.createStoreWith(
            rootReducer, 
            [logger, promise, 'ngUiRouterMiddleware'], // thunk
            // TODO: Remove this in production.
            [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()],
            INITIAL_STATE
        )
    })
    .component('appRoot', appComponent)
    .constant('API_ENDPOINT', 'http://localhost:3005')
