import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";

const middlewares = [logger, ReduxPromise];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
