import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SocketContext } from "../contexts/VideoContext";
import auth from "../firebase.init";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneSlash,
  faMicrophone,
  faVideoSlash,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    camera,
    setCamera,
    mic,
    setMic,
  } = useContext(SocketContext);

  const [user] = useAuthState(auth);

  return (
    <div className="flex justify-evenly flex-wrap my-5 max-w-[90%] mx-auto">
      <div className="relative">
        <h2 className="text-xl">{user?.displayName}</h2>
        {camera ? (
          <div>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="rounded-lg mb-5"
            />
          </div>
        ) : (
          <div className="bg-gray-500 h-[450px] w-[620px] flex flex-col items-center justify-center rounded-2xl">
            {user?.photoURL ? (
              <img src={user?.photoURL || ""} alt="N/A" />
            ) : (
              <div className="w-20 bg-green-400  h-20 text-center flex items-center justify-center">
                <p className="text-5xl">{user?.displayName?.charAt(0)}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-center absolute bottom-5 gap-2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className="button-orange-border-h40"
            onClick={() => setMic(!mic)}
          >
            {mic ? (
              <FontAwesomeIcon icon={faMicrophone} />
            ) : (
              <FontAwesomeIcon icon={faMicrophoneSlash} />
            )}
          </button>
          <button
            onClick={() => setCamera(!camera)}
            className="justify-center rounded-full button-orange-border-h40"
          >
            {camera ? (
              <FontAwesomeIcon icon={faVideo} />
            ) : (
              <FontAwesomeIcon icon={faVideoSlash} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
