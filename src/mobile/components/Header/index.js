import "./style.css";
import {
  UserOutlined,
  LoginOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import { isMobileToast } from "../../../modules";
import { useDispatch } from "react-redux";

export const Header = () => {
  const Login = false;
  const dispatch = useDispatch();

  return (
    <>
      <div className="header-mobile">
        <div className="header-logo-mobile">
          <img
            width={48}
            src="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg"
          />
        </div>
        {Login ? (
          <div className="header-user-mobile">
            <UserOutlined />
          </div>
        ) : (
          <div className="header-user-login-op-mobile">
            <LoginOutlined
              onClick={() =>
                dispatch(
                  isMobileToast({
                    msg_type: "show",
                    icon: "loading",
                  })
                )
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
