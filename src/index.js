import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//for adding middleware and creating store
import { applyMiddleware, createStore } from "redux";

//provider for store
import { Provider } from "react-redux";

//logger for displaying state
import { logger } from "redux-logger";

//router
import { Route } from "react-router";

import reducers from "./reducers/index";

import { BrowserRouter } from "react-router-dom";

import thunk from "redux-thunk";

const middeware = applyMiddleware(thunk, logger);
const store = createStore(reducers, {}, middeware);

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
