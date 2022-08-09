import React from "react";
import { Link } from "react-router-dom";

const UserEvents = ({ soloEvent }) => {
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
  console.log(soloEvent);

  return (
    <div class="card bg-base-100 shadow-xl border-t-4 border-red-500">
      <div class="pt-2 pr-5 pl-5 pb-5">
        <div className="flex justify-end">
          <button className="button-orange-border-h40">Edit</button>
        </div>
        <div className="mt-2 md:mt-5">
          <h4 className="text-2xl">{eventName}</h4>
          <p className="font-thin text-slate-400">
            {eventDuration}min, {eventType}
          </p>
          <p className="font-thin text-slate-500">Date: {eventDate}</p>
          <p className="mt-2 mb-1 text-blue-600 hover:cursor-pointer hover:underline">
            View booking page
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-red-400 hover:cursor-pointer">{location}</p>
          <button className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500">
            Share
          </button>
          <Link
            to="/call"
            className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500"
          >
            Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserEvents;
