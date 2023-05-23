import { combineReducers } from "redux";
import {
  klineReducer,
  notificationReducer,
  DeviceReducer,
  marketsReducer,
} from "./public";
import { profileReducer, authReducer } from "./user";

export const publicReducer = combineReducers({
  Kline: klineReducer,
  Alart: notificationReducer,
  Device: DeviceReducer,
  markets: marketsReducer,
});
export const userReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});
