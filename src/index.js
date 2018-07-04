import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./stores";
import Routes from "./routes";
import "../assets/scss/main.scss";

const app = (
  <Provider store={store.configure()}>
    <Routes />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
