import { Router } from "../../Router";
import { Components } from "../../components";
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
