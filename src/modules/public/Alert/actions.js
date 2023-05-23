import { ADD_NOTIFICATION, ADD_TOAST } from "./constants";

export const AlartPush = ({ msg }, message, description) => ({
  type: ADD_NOTIFICATION,
  payload: {
    msg,
    message,
    description,
  },
});

export const isMobileToast = ({msg_type, icon, content, duration, position}) => ({
  type: ADD_TOAST,
  payload: {
    msg_type,
    icon,
    content,
    duration,
    position,
  },
});
