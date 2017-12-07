import React from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import {Provider} from 'react-redux'
import '../assets/scss/styles.scss'
import {Home} from './components/containers/'


const app = (
    <Provider store = {store.configure()}>
    <Home/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))