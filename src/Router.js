import React from 'react'
import {Home, About, NotFound} from './components/pages/'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Router extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router