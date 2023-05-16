import "./LoginScreen.css";

import { useState, useRef, useEffect } from "react";
import Geetest from "react-geetest";

import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Card, Tabs, Form, Input, Button, Checkbox, Popover, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../modules";
//import { Containers } from "../../containers";
const { TabPane } = Tabs;

export const LogInScreen = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();

  dispatch(signIn(true));
  const [activeTabKey, setActiveTabKey] = useState(
    location.pathname === "/auth/login" ? "1" : "2"
  );
  const [FromH, setFromH] = useState(
    location.pathname === "/auth/login" ? "50%" : "77%"
  );

  const [LButtonLoding, setLButtonLoding] = useState(false);
  const [Blur, setBlur] = useState(true);

  const handleTabChange = (key) => {
    setActiveTabKey(key);
    if (key === "1") {
      setFromH("50%");
    } else {
      setFromH("77%");
      //console.log(key);
    }
  };

  const onFinish = async (values) => {
    if (values.username) {
      ///const data = await Containers.API()
      const response = await fetch(
        "https://raw.githubusercontent.com/mdrijonhossainjibon/trading_ui/main/public/data/user.json"
      );

      if (response.ok) {
        setLButtonLoding(true);
      }
    } else {
      console.log(values);
    }
  };

  setTimeout(() => {
    setBlur(false);
  }, 5000);

  return (
    <Suspense>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "gold",
          }}
        >
          <Card
            bordered={false}
            style={{ width: 500, height: FromH, paddingTop: "-5px" }}
          >
            <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
              <TabPane tab={t("L")} key="1">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: t("Email_req"),
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: t("password_req"),
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>{t("Remember")}</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/">
                      {t("Forgot_password")}
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ marginLeft: "38%", width: 100 }}
                      color="black"
                      loading={LButtonLoding}
                      disabled={LButtonLoding}
                    >
                      {t("L")}
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab={t("R")} key="2">
                <Form
                  name="signup"
                  className="signup-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not a valid email address",
                      },
                      {
                        required: true,
                        message: "Please input your email address",
                      },
                    ]}
                  >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username",
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="referral"
                    rules={[
                      {
                        message: "Please enter a valid referral code",
                      },
                    ]}
                  >
                    <Input
                      prefix={<ShareAltOutlined />}
                      placeholder="Referral Code"
                      defaultValue={location.search.split("=")[1]}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="agree" valuePropName="checked" noStyle>
                      <Checkbox>
                        I have read the <a href="/">agreement</a>
                      </Checkbox>
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="signup-form-button"
                    >
                      Sign up
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </Card>
          <div
            className={Blur ? "loading-container block" : "loading-container"}
          >
            <div className="blur-background" />
            <Spin size="large" className="spin-ssss" />
          </div>
          ghjghgh
        </div>
      </>
    </Suspense>
  );
};
