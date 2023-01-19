import React from "react";
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import "tachyons";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from "./reducers.js";
import thunkMiddleware from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
