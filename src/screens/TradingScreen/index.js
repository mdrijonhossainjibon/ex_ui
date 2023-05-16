import "./style.css";
import { Trading_CHART } from "../../charting_library";
import { HeaderToolbar } from "./HeaderToolbar";
//import { Containers } from "../../containers";
//import { Spin } from "antd";

export const TradingScreen = () => {
  return (
    <div className="td-pg-trading">
      <div
        className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__header-toolbar"
        style={{
          borderRadius: "5px",
        }}
      >
        <HeaderToolbar />
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__market-trading">
        Containers.MarketTrading
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__order-book">
        NewOrderBook
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__trading-chart app">
        <Trading_CHART />
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__order">
        NewOrder
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__recent-trade">
        TradingTradeHistory
      </div>
      <div className="td-pg-trading--bg td-pg-trading__item td-pg-trading--bg td-pg-trading__order-history">
        TradingOrderHistory
      </div>
    </div>
  );
};
