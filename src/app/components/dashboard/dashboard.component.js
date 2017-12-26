import { incrementCounter, decrementCounter } from './counter'

class DashboardComponent {
    constructor($ngRedux) {
        'ngInject'

        this._$ngRedux = $ngRedux
    }

    $onInit() {
        this._unsubscribe = this._$ngRedux.connect(
            state => ({ counter: state.counter }),
            { incrementCounter, decrementCounter }
        )(this)
    }

    $onDestroy() {
        this._unsubscribe()
    }
}

export default {
    restrict: 'E',
    template: require('./dashboard.component.html'),
    controller: DashboardComponent,
    controllerAs: 'self'
}
