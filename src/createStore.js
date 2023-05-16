import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./modules";

export const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
