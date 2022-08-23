import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../media/images/error/404-error.gif";

const NotFound = () => {
    const navigate = useNavigate('');
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-center flex-col">
          <div className="flex justify-evenly">
            <button  onClick={() => window.history.back()} className="btn btn-primary btn-outline">
              Previous page
            </button>
            <button  onClick={() => navigate('/')} className="btn btn-primary btn-outline">Home page</button>
          </div>
          <div className="flex justify-center items-center">
            <img src={error} className="lg:w-1/2" alt="error 404!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
