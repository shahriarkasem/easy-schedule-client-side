import React from 'react';

const UserEvents = ({soloEvent}) => {
    const {_id, userEmail, eventType, eventName, description, eventLink, location} = soloEvent;

    return (
        <div class="card bg-base-100 shadow-xl border-t-4 border-red-500">
        <div class="pt-2 pr-5 pl-5 pb-5">
          <div className="flex justify-end">
            <button className="button-orange-border-h40">
              Edit
            </button>
          </div>
          <div className="mt-2 md:mt-5">
            <h4 className="text-2xl">{eventName}</h4>
            <p className="font-thin text-slate-400">
              Event duration, {eventType}
            </p>
            <p className="my-2 md:my-3 text-blue-600 hover:cursor-pointer hover:underline">
              View booking page
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-red-400 hover:cursor-pointer">
              {location}
            </p>
            <button className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500">
              Share
            </button>
          </div>
        </div>
      </div>
    );
};

export default UserEvents;