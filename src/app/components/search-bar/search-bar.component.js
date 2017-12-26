class SearchBarComponent {

    constructor() {
        this.searchText = null
    }

    querySearch(searchText) {
        return [
            { name: 'Monte Cristo' },
            { name: 'Artorias' },
            { name: 'Abyss' }
        ]
    }

}

export default {
    restrict: 'E',
    template: require('./search-bar.component.html'),
    controller: SearchBarComponent,
    controllerAs: 'self'
}
