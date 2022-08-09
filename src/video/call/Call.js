import React from "react";

import Notification from "../Notification";
import SideBar from "../SideBar";
import VideoPlayer from "../VideoPlayer";

const Call = () => {
  return (
    <div className="text-center my-8">
      <VideoPlayer />
      <SideBar>
        <Notification />
      </SideBar>
    </div>
  );
};

export default Call;
