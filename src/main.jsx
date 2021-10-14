import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouteDom from './router/index'

import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <RouteDom />,
  </Provider>,
  document.getElementById('root')
)