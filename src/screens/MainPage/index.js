import { Router } from "../../Router";
import { Components } from "../../components";
import {} from "../../modules";
import { useDispatch, useSelector } from "react-redux";
export const MainPage = () => {
  const handleComplete = (otp) => {
    alert(`OTP entered: ${otp}`);
  };

  return (
    <>
      <Components.WEBHEADER />
      <Components.TwoFactorVerification
        numInputs={6}
        onComplete={handleComplete}
      />
      <Router />
    </>
  );
};
