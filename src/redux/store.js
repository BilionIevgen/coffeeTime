import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import auth from "./reducers/auth";

import catalog from "./reducers/catalog";
import favourite from "./reducers/favorite";
import cart from "./reducers/cart";

const rootReducer = combineReducers({ auth, catalog, favourite, cart });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
