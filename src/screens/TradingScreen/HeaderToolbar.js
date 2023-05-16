import React from "react";
import get from "lodash/get";
import { SELECTED_UPDATE } from "../../modules";

import { useSelector } from "react-redux";

import playSvg from "../../assets/images/trading/play.svg";
import { HeaderToolbarStyle } from "./HeaderToolbarstyle";

export const HeaderToolbar = () => {
  //const dispatch = useDispatch();
  const marketTickers = useSelector(SELECTED_UPDATE);

  const currentMarket = {
    id: "btc",
    quote_unit: "BTC",
    base_unit: "BTC",
    amount_precision: "000",
    name: "BTC/USDT",
    price_precision: "00",
  };

  const defaultTicker = {
    amount: 0,
    low: 0,
    last: 0,
    high: 0,
    volume: 0,
    price_change_percent: "+0.00%",
  };

  const getTickerValue = (value) => {
    return (
      currentMarket && (marketTickers[currentMarket.id] || defaultTicker)[value]
    );
  };

  console.log("TRST" + getTickerValue("high"));
  const isPositive =
    currentMarket && /\+/.test(getTickerValue("price_change_percent"));
  const cls = isPositive ? "positive" : "negative";

  const bidUnit = currentMarket && currentMarket.quote_unit;
  const askUnit = currentMarket && currentMarket.base_unit;
  const amountPrecision =
    (currentMarket && currentMarket.amount_precision) || 6;
  const pricePrecision = (currentMarket && currentMarket.price_precision) || 4;

  return (
    <HeaderToolbarStyle>
      <div className="td-header__toolbar--left">
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-title">
            {(currentMarket && currentMarket.name) || "NONE"}
          </p>
          <p className={`td-header__toolbar-item-value`}>{askUnit}</p>
        </div>
        <div className="td-header__toolbar-item td-header__toolbar-item--hightlight">
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {Number(getTickerValue("last")).toPrecision(6)}
          </p>
          <p className={`td-header__toolbar-item-value`}>
            ${Number(getTickerValue("last")).toPrecision(6)}
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Change</p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {getTickerValue("price_change_percent")}
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Lowest 24h</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            {Number(getTickerValue("low")).toPrecision(6)}
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Highest 24h</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            {Number(getTickerValue("high")).toPrecision(6)}
          </p>
        </div>

        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">
            {" 24h Volume "}({bidUnit})
          </p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {Number(getTickerValue("volume")).toPrecision(6)}
          </p>
        </div>
      </div>
      <div className="td-header__toolbar--right">
        <img src={playSvg} />
        <a className="link-tutorial" href="/">
          Spot Tutorial
        </a>
      </div>
    </HeaderToolbarStyle>
  );
};
