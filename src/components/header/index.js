import { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Spin, Select } from "antd";
import "./WEBHEADER.css";
import { selectUserLoggedIn } from "../../modules/";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { QRCode, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DownlandOutline,
  RightOutline,
  BellOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useSelector } from "react-redux";

const { Option } = Select;
const languageOptions = [
  { value: "en", label: "English", flag: "FlagOutlined" },
  { value: "bn", label: "বাংলা", flag: "BangladeshOutlined" },
  // Add more language options as needed
];

export const WEBHEADER = () => {
  const isLogin = useSelector(selectUserLoggedIn);
  //const [isLogin, setLogin] = useState(true);
  const [qrshow, setqr] = useState(false);
  const [Language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  function handleLanguageChange(lang) {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <Suspense
      children={
        <div className="Suspense-s">
          <Spin />
        </div>
      }
    >
      <div className="header">
        <div className="header-logo-div" onClick={() => navigate("/")}>
          <img src="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg" />
        </div>
        <ul className="header-ul">
          <li>
            {t("buy-crypto")} <DownOutlined />
          </li>
          <li>{t("market")}</li>
          <li>
            {t("Trading")} <DownOutlined />
          </li>
          <li>
            {t("Earn")} <DownOutlined />
          </li>
        </ul>
        {qrshow ? (
          <div className="qrcode-dawan">
            <Space wrap>
              {" "}
              <QRCode
                value="https://2uv9vu-3000.csb.app/"
                size={120}
                icon="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg"
              />{" "}
            </Space>
            <div className="notes-andt">{t("W")}</div>
            <div className="app-cont">
              you can't dawnload app ? <RightOutline />
            </div>
          </div>
        ) : null}
        <div className="right-login--reg">
          <div className="header-true-login-options">
            {isLogin ? (
              <>
                <div className="all-text"> {t("Blalance")} </div>
                <div className="all-text">{t("Order")}</div>
                <UserOutline className="all-text" />
                <BellOutline className="all-text" />
              </>
            ) : (
              <>
                <div className="Login">{t("L")}</div>
                <div className="Register">{t("R")}</div>
                <BellOutline className="all-text" />
              </>
            )}

            <DownlandOutline
              className="all-text"
              onMouseEnter={() => setqr(true)}
              onMouseLeave={() => setqr(false)}
            />
            <Select
              className="all-text"
              value={Language}
              onChange={handleLanguageChange}
              suffixIcon={<GlobalOutlined className="all-text" />}
              size="small"
              bordered={false}
              dropdownMatchSelectWidth={false}
              dropdownAlign={{
                points: ["bl", "tl"],
                offset: [0, 4],
              }}
              dropdownRender={(menu) => <div>{menu}</div>}
            >
              {languageOptions.map(({ value, label }) => (
                <Option key={value} value={value}>
                  <span role="img" aria-label={label}>
                    {label}
                  </span>
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
