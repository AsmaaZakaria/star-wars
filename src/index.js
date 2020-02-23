import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./history";
import store from "./reduxUtils/store";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
