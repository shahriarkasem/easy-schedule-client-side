import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserEvents = ({ soloEvent, handleEditEvent }) => {
  const navigate = useNavigate("");
  const {
    _id,
    userEmail,
    eventType,
    eventName,
    description,
    eventLink,
    location,
    eventDate,
    eventTime,
    eventDuration,
  } = soloEvent;
  // console.log(soloEvent);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `https://easy-schedule-77cce.web.app/view-booking/${_id}`
    );
    toast.success("Link copied successfully!");
  };

  return (
    <div class="card bg-base-100 shadow-xl border-t-4 border-red-500">
      <div class="pt-2 pr-5 pl-5 pb-5">
        <div className="flex justify-end">
          {/* <button className="button-orange-border-h40">Edit</button> */}
          <label
            onClick={() => handleEditEvent(_id)}
            for="edit-event-modal"
            class="button-orange-border-h40 cursor-pointer"
          >
            Edit
          </label>
        </div>
        <div className="mt-2 md:mt-5">
          <h4 className="text-2xl">{eventName}</h4>
          <p className="font-thin text-slate-400">
            {eventDuration}min, {eventType}
          </p>
          <p className="font-thin text-slate-500">Date: {eventDate}</p>
          <p
            className="mt-2 mb-1 text-blue-600 hover:cursor-pointer hover:underline"
            onClick={() => openInNewTab(`/view-booking/${_id}`)}
          >
            View booking page
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-red-400 hover:cursor-pointer">{location}</p>
        </div>
        <div className="flex justify-end mt-2">
          <button
            className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500 mr-2"
            onClick={() => handleCopyLink()}
          >
            Copy
          </button>
          <Link
            to="/chat"
            className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500"
          >
            Create Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserEvents;
