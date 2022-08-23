import React from "react";
import useUserCollection from "../../../hooks/useUserCollection";
import ChatWithUser from "./ChatWithUser";

const Chat = () => {
  const { isLoading, error, usersData, refetch } = useUserCollection();
  
  return (
    <div className="flex justify-center">
        <div className="min-h-screen flex flex-col justify-center items-center mt-10">
      {/* <h4>Here is your messages</h4> */}
      <h4 className="text-xl font-semibold italic my-2">Send messages</h4>
       {usersData ? (
        <div>
          {usersData.map((userData) => (
            <ChatWithUser 
            key={userData._id} 
            user={userData}>
            </ChatWithUser>
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
