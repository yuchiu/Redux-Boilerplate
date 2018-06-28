import React from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import {Provider} from 'react-redux'
import '../assets/scss/styles.scss'
import {Home, About, NotFound} from './components/pages/'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const app = (
  <Provider store={store.configure()}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))