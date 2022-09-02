import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { SocketContext } from "../contexts/VideoContext";
import auth from "../firebase.init";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
import { useParams } from "react-router-dom";

const SideBar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [onChange, setOnChange] = useState("");

  const { email } = useParams();

  const [click, setClick] = useState(false);
  const [end, setEnd] = useState(false);

  // const [idToCall, setIdToCall] = useState("");

  const [user] = useAuthState(auth);

  // const { users } = useSelector((state) => state.users);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  // const handleClick = () => {
  //   setClick(true);
  //   setEnd(false);
  //   console.log(true);
  // };

  // const handleEnd = () => {
  //   setEnd(true);
  //   setClick(false);
  // };

  return (
    <div className="w-[90%] lg:w-1/2 my-10 mx-auto">
      <div className="py-[10px] px-[20px] border border-stone-900">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
          noValidate
          autoComplete="off"
        >
          <div className="flex gap-4 items-center justify-center">
            {/* <h6 className="text-xl font-bold text-orange-500">You</h6> */}
            <div className="">
              <input
                className="input input-bordered input-primary mt-2 font-bold "
                type="text"
                value={user?.email}
                fullWidth
                readOnly
              />
            </div>
            <div className=" ">
              {/* <h6 className="text-xl font-bold text-primary mb-2">
                Make a call with
              </h6>

              <input
                onChange={(e) => setOnChange(e.target.value)}
                type="email"
                value={email}
                class="input input-bordered font-bold"
              />

              
             

              {!click || end ? (
                <button onClick={handleClick} className="btn btn-accent mt-4">
                  Call
                </button>
              ) : (
                <div className="flex items-center gap-4 justify-center mt-4">
                  <h2 className="text-accent ">
                    {" "}
                    Please wait for opponent response
                  </h2>

                  <button
                    onClick={handleEnd}
                    className="button-orange-border-h40"
                  >
                    End
                  </button>
                </div>
              )} */}
              <button
                onClick={() => window.open()}
                className="button-orange-border-h40"
              >
                Create Meeting Room
              </button>
            </div>
          </div>
        </form>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
