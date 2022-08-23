import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatWithUser = ({ user }) => {
  const { _id, email, name } = user;
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    const userNameFirstLetter = name.charAt(0);
    setFirstLetter(userNameFirstLetter);
  }, [user, name]);

  const navigate = useNavigate('');

  return (
    <div className="border-2 m-5 rounded-lg">
      <div className="card-body">
        <div className="flex justify-between itmes-center">
          <div className="card-actions flex justify-start items-center">
            <div className="avatar">
              <div className="w-16 rounded-full mt-2 mr-3">
                <div className="w-full bg-green-400 h-full text-center flex items-center justify-center">
                  <p className="text-lg font-thin">{firstLetter}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl">{name}</h4>
              <div className="">
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-40">
            <button onClick={() => navigate(`/chat-room/${email}/${name}`)} className="btn btn-success btn-outline">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithUser;
