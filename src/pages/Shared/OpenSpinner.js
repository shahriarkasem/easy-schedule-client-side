import React from "react";

const OpenSpinner = () => {
  return (
    <div>
      <div class="h-screen flex items-center justify-center ">
        <div class="w-24 h-24 border-l-2 border-red-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default OpenSpinner;
