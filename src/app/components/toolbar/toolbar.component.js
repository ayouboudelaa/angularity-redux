class ToolbarComponent {

    constructor($mdSidenav) {
        'ngInject'

        this._$mdSidenav = $mdSidenav
    }

    toggleSidenav(componentId) {
        this._$mdSidenav(componentId).toggle()
    }
}

export default {
    restrict: 'E',
    template: require('./toolbar.component.html'),
    controller: ToolbarComponent,
    controllerAs: 'self'
}