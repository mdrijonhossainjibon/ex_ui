import React, { useState, useEffect } from "react";

export const GeetestSlider = ({ gt, challenge, onSuccess, onFail, onReady }) => {
  const [isReady, setIsReady] = useState(false);
  const [sliderData, setSliderData] = useState({});
  const [slider, setSlider] = useState(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderOffset, setSliderOffset] = useState(0);

  useEffect(() => {
    // Load the Geetest API script
    const script = document.createElement("script");
    script.src = "https://static.geetest.com/static/tools/gt.js";
    script.async = true;
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScriptLoad = () => {
    // Initialize the Geetest widget
    window.initGeetest({
      gt,
      challenge,
      offline: false,
      new_captcha: true,
      product: "float",
      width: "100%",
      onReady: handleReady,
      onSuccess: handleSuccess,
      onFail: handleFail,
    });
  };

  const handleReady = (instance) => {
    setIsReady(true);
    setSlider(instance);
    onReady();
  };

  const handleSuccess = () => {
    onSuccess();
  };

  const handleFail = () => {
    onFail();
  };

  const handleSliderMouseDown = (event) => {
    event.preventDefault();
    setSliderData({
      startX: event.pageX,
      startY: event.pageY,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
      target: event.target,
    });
  };

  const handleSliderMouseMove = (event) => {
    if (!sliderData.target) return;
    const { startX, startY, offsetX, offsetY } = sliderData;
    const offsetXNew = event.pageX - startX + offsetX;
    const offsetYNew = event.pageY - startY + offsetY;
    const maxOffset =
      sliderWidth - sliderOffset - sliderData.target.offsetWidth;
    const newOffsetX = Math.max(0, Math.min(offsetXNew, maxOffset));
    sliderData.target.style.transform = `translateX(${newOffsetX}px)`;
  };

  const handleSliderMouseUp = (event) => {
    if (!sliderData.target) return;
    const { target } = sliderData;
    const offsetX = parseInt(
      target.style.transform.split("(")[1].split("px)")[0],
      10
    );
    slider.verify(
      () => {
        // Verification succeeded
        target.style.transform = "translateX(0)";
        setSliderData({});
        onSuccess();
      },
      () => {
        // Verification
        target.style.transform = "translateX(0)";
        setSliderData({});
        onFail();
      },
      offsetX
    );
  };

  const handleWindowResize = () => {
    if (slider && slider.data.width !== sliderWidth) {
      setSliderWidth(slider.data.width);
      setSliderOffset(slider.data.xpos);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [slider]);

  return (
    <div
      className="geetest-slider"
      onMouseDown={handleSliderMouseDown}
      onMouseMove={handleSliderMouseMove}
      onMouseUp={handleSliderMouseUp}
      onMouseLeave={handleSliderMouseUp}
    >
      {!isReady && <div>Loading Geetest slider...</div>}
      <div id="geetest-captcha" />
    </div>
  );
};
