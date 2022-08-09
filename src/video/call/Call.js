import React from "react";
import { VideoContextProvider } from "../../contexts/VideoContext";

import Notification from "../Notification";
import SideBar from "../SideBar";
import VideoPlayer from "../VideoPlayer";

const Call = () => {
  return (
    <div className="text-center my-8">
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
