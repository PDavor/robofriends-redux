import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import "tachyons";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from "./reducers.js";
import thunkMiddleware from "redux-thunk";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.register();
