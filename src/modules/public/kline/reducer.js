import {
  SET_KLINE_DATA,
  UPDATE_KLINE_DATA,
  API_CALL_KLINE_DATA,
} from "./constants";

const defaultUser = {
  email: "",
  level: 0,
  otp: false,
  role: "",
  state: "",
  uid: "",
  profiles: [],
  referal_uid: "",
  labels: [],
  phone: [],
  created_at: "",
  updated_at: "",
};

const initialState = {
  data: [],
  update: {},
  api_call: false,
  loading: false,
  error: null,
};

export const klineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KLINE_DATA:
      return { ...state, data: action.payload };
    case UPDATE_KLINE_DATA:
      return { ...state, update: action.payload };
    case API_CALL_KLINE_DATA:
      return { ...state, api_call: action.payload };
    case "FETCH_KLINE_SUCCESS":
      return { ...state, klineData: action.payload, loading: false };
    case "FETCH_KLINE_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
