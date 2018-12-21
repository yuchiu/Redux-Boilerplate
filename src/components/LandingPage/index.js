import React from "react";
import logo from "./logo.svg";
import "./index.scss";

const LandingPage = () => (
  <div className="landing-page page-wrapper">
    <header className="landing-header">
      <img src={logo} className="landing-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="landing-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default LandingPage;
