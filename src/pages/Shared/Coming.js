import React from "react";
import coming from "../../media/images/coming.gif";

const Coming = () => {
  return (
    <div className=" my-12">
      <img className="mx-auto" src={coming} alt="" />

      <button
        onClick={() => window.history.back()}
        className="btn button-orange block mx-auto"
      >
        Return
      </button>
    </div>
  );
};

export default Coming;
