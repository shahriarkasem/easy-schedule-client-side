import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useUserCollection from "../../../hooks/useUserCollection";
import ChatWithUser from "./ChatWithUser";

const Chat = () => {
  const [user] = useAuthState(auth);
  const { isLoading, error, usersData, refetch } = useUserCollection();

  const[data, setData] = useState()
  useEffect(()=>{
let values = [];
const reverse = usersData?.reverse()?.forEach(userData => {
  const same = user?.email === userData.email;
  if(!same){
    values.push(userData);
  }
  setData(values)
});
  },[usersData])
  
  return (
    <div className="flex justify-center">
        <div className="min-h-screen flex flex-col justify-center items-center mt-10">
      {/* <h4>Here is your messages</h4> */}
      <h4 className="text-xl font-semibold italic my-2">Send messages</h4>
       {data ? (
        <div>
          {data.map((userData) => (
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
