import { Router } from "../../Router";
import { Components } from "../../components";
import { DeviceSelector } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import { MobileComponents } from "../../mobile";
//import { NewBottomNavbar } from "../../mobile/components/NewBottomNavbars";
export const MainPage = () => {
  const handleComplete = (otp) => {
    alert(`OTP entered: ${otp}`);
  };

  const isMobile = useSelector(DeviceSelector);

  return (
    <>
      {isMobile ? <MobileComponents.Header /> : <Components.WEBHEADER />}
      <Components.TwoFactorVerification
        numInputs={6}
        onComplete={handleComplete}
      />
      <Router />
    </>
  );
};
