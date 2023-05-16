import {
  SET_KLINE_DATA,
  UPDATE_KLINE_DATA,
  API_CALL_KLINE_DATA,
} from "./constants";

export const setKlineData = (data) => ({
  type: SET_KLINE_DATA,
  payload: data,
});

export const fetchKlineSuccess = (data) => ({
  type: "FETCH_KLINE_SUCCESS",
  payload: data,
});

export const fetchKlineFailure = (error) => ({
  type: "FETCH_KLINE_FAILURE",
  payload: error,
});

export const UpdateKlineData = (update) => ({
  type: UPDATE_KLINE_DATA,
  payload: update,
});
export const API_CALL = (api_call_true_or_false) => ({
  type: API_CALL_KLINE_DATA,
  payload: api_call_true_or_false,
});
