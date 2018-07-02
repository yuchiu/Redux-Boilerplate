import React from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import {Provider} from 'react-redux'
import Router from './Router'
import '../assets/scss/main.scss'

const app = (
  <Provider store={store.configure()}>
    <Router/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))