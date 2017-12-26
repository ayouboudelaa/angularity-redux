import angular from 'angular'
import aboutComponent from './about/about.component'
import dashboardComponent from './dashboard/dashboard.component'
import productDetailsComponent from './product-details/product-details.component'
import productsListComponent from './products-list/products-list.component'
import searchBarComponent from './search-bar/search-bar.component'
import sidenavMenuComponent from './sidenav-menu/sidenav-menu.component'
import toolbarComponent from './toolbar/toolbar.component'

export default angular
    .module('app.components', [])
    .component('about', aboutComponent)
    .component('dashboard', dashboardComponent)
    .component('productDetails', productDetailsComponent)
    .component('productsList', productsListComponent)
    .component('searchBar', searchBarComponent)
    .component('sidenavMenu', sidenavMenuComponent)
    .component('toolbar', toolbarComponent)
    .name
