import React, { useState, useEffect } from "react";
import { PullToRefresh, JumboTabs } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
import { useDispatch } from "react-redux";
import { isMobileToast, marketsTickersData } from "../../../modules";
import { MarketTop } from "./MarketTop";
import { MobileComponents } from "../../components";
import "./style.css";
import { ICON } from "../../assets";
export const MBILEHOMEPAGE = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRefresh = async () => {
    setRefreshing(true);
    await sleep(1000);

    dispatch(
      isMobileToast({
        content: "Updated",
      })
    );
    dispatch(
      marketsTickersData({
        "ltc-usdt": {
          last: Math.random().toPrecision(5),
          price_change_percent: `${(Math.random() - (1 % 100)).toPrecision(
            6
          )}%`,
          open: Math.random().toPrecision(5),
        },
        "btc-usdt": {
          last: Math.random().toPrecision(5),
          price_change_percent: `${(Math.random() - (1 % 100)).toPrecision(
            6
          )}%`,
          open: Math.random().toPrecision(5),
        },
      })
    );
  };

  const messages = [
    "Welcome to our website!",
    "Check out our latest offers!",
    "Don't forget to subscribe to our newsletter!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ant-mobile-home">
      MobileComponents.CarouselMobile
      <div className="notice-bar">
        <ICON.SpeakIcon />
        <div className="notice-content">
          <div className="notice-text">
            <span>{messages[currentIndex]}</span>
          </div>
        </div>
        <div className="all-menu">
          <ICON.ListIcon />
        </div>
      </div>
      <div></div>
      <PullToRefresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderText={(status) => {
          return <div>{MobileComponents.StatusRecord[status]}</div>;
        }}
      >
        <div className="name-home-pull">
          <JumboTabs defaultActiveKey="1">
            <JumboTabs.Tab title="Top Gainers" key="1">
              <MarketTop />
            </JumboTabs.Tab>
            <JumboTabs.Tab title="Vol Leaders" key="2">
              <MarketTop />
            </JumboTabs.Tab>
            <JumboTabs.Tab title="Weekly Heat" key="3">
              <MarketTop />
            </JumboTabs.Tab>
            <JumboTabs.Tab title="New Listing" key="4">
              <MarketTop />
            </JumboTabs.Tab>
          </JumboTabs>
        </div>
      </PullToRefresh>
    </div>
  );
};
