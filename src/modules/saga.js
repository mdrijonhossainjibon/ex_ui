import { put, takeLatest } from "redux-saga/effects";
import { fetchKlineSuccess, fetchKlineFailure } from "./index";

function* fetchKline(action) {
  try {
    const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=10`;
    const response = yield fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = yield response.json();
    const klineData = data.map((k) => ({
      open: parseFloat(k[1]),
      high: parseFloat(k[2]),
      low: parseFloat(k[3]),
      close: parseFloat(k[4]),
      volume: parseFloat(k[5]),
      timestamp: k[6],
    }));
    yield put(fetchKlineSuccess(klineData));
  } catch (error) {
    yield put(fetchKlineFailure(error.message));
  }
}

export function* watchFetchKline() {
  yield takeLatest("FETCH_KLINE_SUCCESS", fetchKline);
}
