import { ADD_NOTIFICATION, ADD_TOAST } from "./constants";
import { notification } from "antd";
import { Toast } from "antd-mobile";
export const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      notification.warning({
        message: action.payload.message,
        description: action.payload.description,
      });
      return [...state, action.payload];
    case ADD_TOAST:
      Toast["show"]({
        icon: action.payload.icon ? action.payload.icon : action.payload.icon,
        content: action.payload.content ? action.payload.content : null,
        duration: action.payload.duration ? action.payload.duration : 1000,
        position: action.payload.position ? action.payload.position : "center",
      });
      return [...state, action.payload];
    default:
      return state;
  }
};
