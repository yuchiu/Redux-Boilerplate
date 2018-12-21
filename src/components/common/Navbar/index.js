import React from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";

class Navbar extends React.Component {
  routeToLanding = () => {
    const { history } = this.props;
    history.push("/");
  };

  routeToAbout = () => {
    const { history } = this.props;
    history.push("/about");
  };

  routeToTest = () => {
    const { history } = this.props;
    history.push("/test");
  };

  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-start">
          <span
            className="navbar-start__item pointer-cursor no-highlight"
            onClick={this.routeToLanding}
          >
            Redux Boilerplate
          </span>
        </div>

        <div className="navbar-end">
          <div
            className="navbar-end__item pointer-cursor no-highlight"
            onClick={this.routeToAbout}
          >
            About
          </div>
          <div
            className="navbar-end__item pointer-cursor no-highlight"
            onClick={this.routeToTest}
          >
            Test
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);
