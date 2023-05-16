import { combineReducers } from "redux";
import { klineReducer, notificationReducer } from "./public";
import { profileReducer, authReducer } from "./user";

export const publicReducer = combineReducers({
  Kline: klineReducer,
  Alart: notificationReducer,
});
export const userReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});
