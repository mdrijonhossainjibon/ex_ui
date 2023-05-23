import { SET_DEVICE_TYPE } from "./constants";

export const setDeviceType = (isMobile) => ({
  type: SET_DEVICE_TYPE,
  payload: isMobile,
});
