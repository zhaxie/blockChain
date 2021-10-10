import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router,  } from 'react-router-dom'
import RouteConfigExample from './router/index'

ReactDOM.render(
  <React.StrictMode>
    <RouteConfigExample />
  </React.StrictMode>,
  document.getElementById('root')
)