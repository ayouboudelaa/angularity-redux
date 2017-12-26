import './app.component.scss'

class AppComponent {
    constructor() {
        this.items = [
            {
                name: 'Dashboard',
                icon: 'mdi-view-dashboard',
                route: 'dashboard'
            }, {
                name: 'Products',
                icon: 'mdi-cart',
                route: 'productsList'
            }, {
                name: 'Stores',
                icon: 'mdi-store',
                route: ''
            }, {
                name: 'Users',
                icon: 'mdi-account-multiple',
                route: ''
            }, {
                name: 'About',
                icon: 'mdi-help-circle',
                route: 'about'
            } 
        ]
    }
}

export default {
    restrict: 'E',
    template: require('./app.component.html'),
    controller: AppComponent,
    controllerAs: 'self'
}
