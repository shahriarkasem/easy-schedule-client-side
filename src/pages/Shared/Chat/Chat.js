import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../../firebase.init";
import { fetchUsers } from "../../../redux/slices/userSlice";
import ChatWithUser from "./ChatWithUser";

const Chat = () => {
  const [user] = useAuthState(auth);

  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="min-h-screen flex flex-col justify-center items-center mt-10">
        <h4 className="text-xl font-semibold italic my-2">
          Send message or Call
        </h4>
        {users ? (
          <div>
            {users.map((userData) => (
              <ChatWithUser key={userData._id} user={userData}></ChatWithUser>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Chat;
