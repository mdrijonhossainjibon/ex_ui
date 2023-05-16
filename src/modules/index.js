import { combineReducers } from "redux";
import { publicReducer, userReducer } from "./app";

export const rootReducer = combineReducers({
  public: publicReducer,
  users: userReducer,
});

////

export * from "./public";
export * from "./user";
