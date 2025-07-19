import React from "react";
import Lottie from "lottie-react";
import logo from "../assests/animations/logo.json"
const LottieSplash = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white w-full">
      <div className="w-full">
        <Lottie animationData={logo} loop={false} />
      </div>
    </div>
  );
};

export default LottieSplash;
