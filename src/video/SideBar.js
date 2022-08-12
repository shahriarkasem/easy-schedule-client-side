import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { SocketContext } from "../contexts/VideoContext";
import auth from "../firebase.init";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";

const SideBar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  const [user] = useAuthState(auth);

  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
              <h6 className="text-xl font-bold text-orange-500">You</h6>
              <input
                className="input input-bordered input-primary mt-2 font-bold text-xl"
                type="text"
                value={user?.email}
                fullWidth
                readOnly
              />
            </div>
            <div className="flex flex-col p-[20px]">
              <h6 className="text-xl font-bold text-accent mb-2">
                Make a call with -
              </h6>

              <select
                required
                defaultValue={"DEFAULT"}
                class="select select-bordered"
              >
                <option disabled value="DEFAULT">
                  Select user to call
                </option>

                {users?.map((user) => (
                  <option value={user.email}>{user.email}</option>
                ))}
              </select>

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
                  // onClick={() => callUser(idToCall)}
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
