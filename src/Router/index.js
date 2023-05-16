import { Route, Routes } from "react-router-dom";
import { Screen } from "../screens";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen.Webpagemain />} />
        <Route path="/auth/login" element={<Screen.LogInScreen />} />
        <Route path="/auth/register" element={<Screen.LogInScreen />} />
        <Route path="/trade" element={<Screen.TradingScreen />} />
        <Route path="/:symbol" element={<Screen.TradingScreen />} />
      </Routes>
    </>
  );
};
