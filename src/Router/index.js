import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeviceSelector, setDeviceType } from "../modules";
import { Screen } from "../screens";
import { Mobile } from "../mobile";
export const Router = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(DeviceSelector);
  const location = useLocation();

  useEffect(() => {
    const detectDeviceType = () => {
      const sMobile = window.matchMedia("(max-width: 768px)").matches;
      dispatch(setDeviceType(sMobile));
      console.log(sMobile);
    };

    detectDeviceType();
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isMobile ? <Mobile.MBILEHOMEPAGE /> : <Screen.Webpagemain />}
        />
        <Route
          path="/auth/login"
          element={isMobile ? <Mobile.Login /> : <Screen.LogInScreen />}
        />
        <Route
          path="/auth/register"
          element={isMobile ? <Mobile.Login /> : <Screen.LogInScreen />}
        />
        <Route path="/trade" element={<Screen.TradingScreen />} />
        <Route path="/:symbol" element={<Screen.TradingScreen />} />
      </Routes>
    </>
  );
};
