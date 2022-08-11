import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { SocketContext } from "../contexts/VideoContext";
import auth from "../firebase.init";

const SideBar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  // const [user] = useAuthState(auth);

  return (
    <div className="w-[90%] lg:w-1/2 my-10 mx-auto">
      <div className="py-[10px] px-[20px] border border-stone-900">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col"
          noValidate
          autoComplete="off"
        >
          <div className="grid lg:grid-cols-2 md:grid-cols-2">
            <div className="flex flex-col p-[20px]">
              <h6 className="text-xl ">Account Info</h6>
              <input
                className="input input-bordered input-primary mt-5"
                type="text"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />

              <CopyToClipboard
                text={me}
                className="mt-5 button-orange-border-h40"
              >
                <button className="">Copy Id</button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-col p-[20px]">
              <h6 className="text-xl">Make a call</h6>

              <input
                className="input input-bordered input-primary mt-5"
                type="text"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <button
                  className="btn btn-secondary mt-[20px]"
                  fullWidth
                  onClick={leaveCall}
                >
                  Hang Up
                </button>
              ) : (
                <button
                  className="btn btn-primary mt-[20px]"
                  fullWidth
                  onClick={() => callUser(idToCall)}
                >
                  call
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
