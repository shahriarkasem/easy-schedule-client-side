import React from "react";
import { useContext } from "react";
import { SocketContext } from "../contexts/VideoContext";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div>
      <>
        {call.isReceivedCall && !callAccepted && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1> {call.name} is calling: </h1>
            <button onClick={answerCall} className="btn btn-secondary">
              Answer
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default Notification;
