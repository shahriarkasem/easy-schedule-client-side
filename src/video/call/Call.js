import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoContextProvider } from "../../contexts/VideoContext";

import Notification from "../Notification";
import SideBar from "../SideBar";
import VideoPlayer from "../VideoPlayer";

const Call = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/d-home/event-types");

    window.location.reload();
  };

  return (
    <div className="text-center p-8 bg-[#202124]">
      <button onClick={handleClick} className="btn btn-accent">
        Back
      </button>

      <VideoContextProvider>
        <VideoPlayer />
        <SideBar>
          <Notification />
        </SideBar>
      </VideoContextProvider>
    </div>
  );
};

export default Call;
