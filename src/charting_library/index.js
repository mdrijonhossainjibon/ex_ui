import { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  API_CALL_Selector,
  SELECTED_DATA,
  setKlineData,
  UpdateKlineData,
  fetchKlineFailure,
  SELECTED_UPDATE,
  API_CALL,
  AlartPush,
} from "../modules";
import { fetchKline, subscribeKline } from "../api";
import "./style.css";

export const Trading_CHART = () => {
  const chart = useRef(null);
  const paneId = useRef("");
  const [timePeriod, setTimePeriod] = useState("5m");
  const data = useSelector(SELECTED_DATA);
  const KlineFetch = useSelector(API_CALL_Selector);
  const update = useSelector(SELECTED_UPDATE);
  const dispatch = useDispatch();
  const [markettrack, setmarkettrack] = useState("btc");
  useEffect(() => {
    chart.current = init("indicator-k-line");
    paneId.current = chart.current?.createIndicator("VOL");
    chart.current?.createIndicator("MA", false, {
      id: "candle_pane",
    });

    chart.current?.applyNewData([
      {
        timestamp: Date.now() * 1000,
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        volume: 0,
      },
    ]);
    subscribeKline("BTCUSDT", "1s", (callback) => {
      //console.log(callback);

      chart.current?.updateData({
        timestamp: Date.now() * 1000,
        open: callback.open,
        high: callback.high,
        low: callback.low,
        close: callback.close,
        volume: callback.volume,
      });

      dispatch(
        UpdateKlineData({
          btc: {
            amount: 0,
            low: callback.low,
            last: callback.open,
            high: callback.high,
            volume: callback.volume,
            price_change_percent: "-" + Math.random().toFixed(4) + "%",
          },
        })
      );
    });

    return () => {
      dispose(chart.current);
    };
  }, []);

  const handleTimePeriodClick = (time) => {
    setTimePeriod(time);
  };

  useEffect(() => {
    if (KlineFetch) {
      chart.current?.applyNewData(data);
    }
  }, [KlineFetch, data]);

  useEffect(() => {
    fetchKline("BTCUSDT", "1h")
      .then((rep) => {
        //console.log(rep);
        dispatch(setKlineData(rep.slice(0, 5)));
        dispatch(API_CALL(true));
      })
      .catch((e) => {
        dispatch(fetchKlineFailure(e.message));
        dispatch(AlartPush("error", e.message));
      });
  }, [fetchKline]);

  return (
    <>
      <div className="k-line-chart-container">
        <div id="indicator-k-line" className="k-line-chart" />
        <div className="k-line-chart-menu-container"></div>
      </div>
      <div className="watermark">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1280px-Binance_logo.svg.png" />
      </div>
      <div className="time_period">
        <Button name="1s" onClick={() => handleTimePeriodClick("1s")}>
          1s
        </Button>{" "}
        <Button name="3s" onClick={() => handleTimePeriodClick("3s")}>
          3s
        </Button>{" "}
        <Button name="5s" onClick={() => handleTimePeriodClick("5s")}>
          5s
        </Button>{" "}
        <Button name="15s" onClick={() => handleTimePeriodClick("15s")}>
          15s
        </Button>{" "}
        <Button name="30s" onClick={() => handleTimePeriodClick("30s")}>
          30s
        </Button>{" "}
        <Button name="1m" onClick={() => handleTimePeriodClick("1m")}>
          1m
        </Button>{" "}
        <Button name="5m" onClick={() => handleTimePeriodClick("5m")}>
          5m
        </Button>{" "}
        <Button name="15m" onClick={() => handleTimePeriodClick("15m")}>
          15m
        </Button>{" "}
        <Button name="30m" onClick={() => handleTimePeriodClick("30m")}>
          30m
        </Button>{" "}
      </div>
    </>
  );
};
