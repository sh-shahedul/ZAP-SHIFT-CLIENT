import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/json/error.json";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Animation */}
      <Lottie
        animationData={forbiddenAnimation}
        loop={false}
        style={{ height: 200, width: 200 }}
      />

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#d30059] mt-4">
        You Are Forbidden to Access This Section
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mt-2">
        You don't have permission to view this content.
      </p>
    </div>
  );
};

export default Forbidden;
