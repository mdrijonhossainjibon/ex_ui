import React, { useState, useRef, useEffect } from "react";
import { Input, Modal } from "antd";
import "./style.css";
import { selectSignInRequire2FA, selectUserLoggedIn } from "../../modules";
import { useSelector, useDispatch } from "react-redux";
export const TwoFactorVerification = ({ numInputs = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const inputsRef = useRef([]);
  //const [isModalVisible, setIsModalVisible] = useState(true);
  const isModalVisible = useSelector(selectSignInRequire2FA);
  const selectUser = useSelector(selectUserLoggedIn);
  
  console.log(selectUser);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on next input box
    if (value && index < numInputs - 1) {
      inputsRef.current[index + 1].focus();
    }
    if (event.clipboardData && event.clipboardData.getData) {
      const pastedData = event.clipboardData.getData("text/plain");
      const otpArray = pastedData.split("").slice(0, numInputs);
      const newOtp = [...otp];
      otpArray.forEach((value, index) => {
        newOtp[index] = value;
      });
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index]) {
      // Focus on previous input box if Backspace is pressed and current input is empty
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (event.key === "Tab" || event.key === "ArrowRight") {
      // Focus on next input box if Tab or ArrowRight is pressed
      if (index < numInputs - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else if (event.key === "ArrowLeft") {
      // Focus on previous input box if ArrowLeft is pressed
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (event.key === "Enter" && index === numInputs - 1) {
      // If Enter is pressed in the last input box, show modal
      //setIsModalVisible(true);
      onComplete(otp.join(""));
    }
  };

  const handleClear = () => {
    const blankInputs = new Array(numInputs).fill("");
    setOtp(blankInputs);
    inputsRef.current.forEach((input, index) => {
      input.input.value = ""; // set input value to blank
      if (index === 0) {
        input.focus(); // focus on first input
      }
    });
  };

  const handleOk = () => {
    //setIsModalVisible(false);
  };

  const handleCancel = () => {
    //setIsModalVisible(false);
    setOtp(new Array(numInputs).fill(""));
    inputsRef.current[0].focus();
  };
  useEffect(() => {
    const isFilled = otp.every((value) => value !== "");
    if (isFilled) {
      onComplete(otp.join(""));
      handleClear();
    }
  }, [otp]);

  return (
    <div>
      <Modal visible={isModalVisible} onOk={handleOk} closable={false}>
        <p>TwoFactor Verification</p>
        <div>
          {otp.map((value, index) => (
            <Input
              key={index}
              color={"gold"}
              style={{ width: 50, marginRight: 10 }}
              value={value}
              maxLength={1}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};
