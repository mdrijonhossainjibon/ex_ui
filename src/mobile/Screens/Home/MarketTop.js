import classNames from "classnames";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectMarketTickers } from "../../../modules";

import "./MarketTop.css";
const market = [
  { id: "BTC/USDT" },
  {
    id: "LTC/USDT",
    price_precision: 6,
  },
];

const DEFAULT_TICKER = {
  amount: "0.0000",
  last: "0.900000",
  high: "0.0000",
  open: "0.20001",
  low: "0.0000",
  price_change_percent: "0.00%",
  volume: "0",
  avg_price: "0",
};
export const MarketTop = () => {
  //const dispatch = useDispatch();
  const tickers = useSelector(selectMarketTickers);
  ///console.log(useSelector(selectMarketTickers));
  const Finds = (id) => {
    return (
      <img
        width={28}
        height={28}
        src={require(`../../../../node_modules/cryptocurrency-icons/128/color/${id}.png`)}
      />
    );
  };
  return (
    <>
      <div className="table-title">
        <span>Pair</span>
        <span>Last Price</span>
        <span>24H Change</span>
      </div>

      {market.map((item) => {
        const data = item.id.split("/");
        const ticker =
          tickers[
            `${data[0].toLocaleLowerCase()}-${data[1].toLocaleLowerCase()}`
          ] || DEFAULT_TICKER;
        const marketTickerChange = +(+ticker.last - +ticker.open).toFixed(
          item.price_precision
        );

        const marketChangeClass = classNames("", {
          "coincode-title": true,
          "red-color": (+marketTickerChange || 0) >= 0,
          "yellow-color": (+marketTickerChange || 0) < 0,
        });
        return (
          <div className="table-titles">
            <div className="coincode">
              {Finds(item.id.split("/")[0].toLocaleLowerCase())}{" "}
              {item.id.split("/")[0]}
              <p className="pair-mobile">/{item.id.split("/")[1]}</p>
            </div>
            <div className="coincode">{ticker.last}</div>
            <div className="coincode-title">
              <div className={marketChangeClass}>
                <p>{ticker.price_change_percent}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
