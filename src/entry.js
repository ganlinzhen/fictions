import 'core-js/es6/map' //支持Map
import 'core-js/es6/set' //支持Set
import 'core-js/es6/string' //支持includes()
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

var FastClick = require('fastclick')

import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import debounce from 'lodash/debounce'
import isArray from 'lodash/isArray'

window.isEmpty = isEmpty
window.isEqual = isEqual
window.debounce = debounce
window.isArray = isArray

//解决移动端300毫秒延迟
FastClick.attach(document.body)

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )

render(App)

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextRootContainer = require('./App').default
        render(NextRootContainer)
    })
}