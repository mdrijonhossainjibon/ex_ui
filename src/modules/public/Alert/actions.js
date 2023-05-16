import { ADD_NOTIFICATION } from "./constants";

export const AlartPush = (type, message, description) => ({
  type: ADD_NOTIFICATION,
  payload: {
    type,
    message,
    description,
  },
});
