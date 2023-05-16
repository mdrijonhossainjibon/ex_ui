import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./global.css";
import "./style.css";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import { Store } from "./createStore";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./screens/MainPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <MainPage />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
