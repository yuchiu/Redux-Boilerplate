import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, NotFound } from "../components/layouts";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
