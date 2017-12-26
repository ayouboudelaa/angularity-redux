class SidenavMenuComponent {

}

export default {
    restrict: 'E',
    bindings: {
        items: '<'
    },
    template: require('./sidenav-menu.component.html'),
    controller: SidenavMenuComponent,
    controllerAs: 'self'
}
