import React, { useContext } from "react";
import ready from "../../../../media/images/feature/ready.png";
import { Link } from "react-router-dom";
import DarkContext from "../../../DarkMode/DarkContext";

const ReadySignup = () => {
  const { toggle } = useContext(DarkContext);
  // className={toggle === true ? "text-black" : "text-white"}
  return (
    <div
      className={
        toggle === true
          ? " mt-44 bg-[#ef7841] bg-my-green grid grid-cols-2 items-center  rounded-lg"
          : "bg-[#334155] mt-44 border border-white bg-my-green grid grid-cols-2 items-center  rounded-lg"
      }
    >
      <div className="text-center md:px-3 text-white">
        <h1 className="font-medium text-lg lg:text-2xl">Ready? Let's go</h1>
        <p className="py-2 text-sm ">
          14-days trial, no credit card required, no strings attached.
        </p>
        <Link
          to="/signup"
          className={
            toggle === true ? "btn btn-black  my-2" : "btn button-orange my-2"
          }
        >
          SignUp
        </Link>
      </div>
      <div>
        <img className="lg:-mt-32 -mt-10" src={ready} alt="" />
      </div>
    </div>
  );
};

export default ReadySignup;
