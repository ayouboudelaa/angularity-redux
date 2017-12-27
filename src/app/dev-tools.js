import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const DevTools = createDevTools(
    <DockMonitor 
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        changeMonitorKey='ctrl-m'>
        <LogMonitor />
        <SliderMonitor />
    </DockMonitor>
)

export function runDevTools($ngRedux, $rootScope, $timeout) {
    'ngInject'

    render(
        <Provider store={$ngRedux}>
            <DevTools />
        </Provider>,
        document.getElementById('dev-tools')
    )

    $ngRedux.subscribe(() => {
        $timeout(() => {$rootScope.$apply(() => {})}, 100)
    })
}

export default DevTools
