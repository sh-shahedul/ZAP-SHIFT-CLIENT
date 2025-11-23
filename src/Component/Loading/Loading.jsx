 import React from "react";
 import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50">
      <FaSpinner className="text-4xl text-lime-500 animate-spin" />
    </div>
  );
};

export default Loading;