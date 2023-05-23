import { SET_DEVICE_TYPE } from "./constants";

const initialState = {
  isMobile: false,
};

export const DeviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
};
