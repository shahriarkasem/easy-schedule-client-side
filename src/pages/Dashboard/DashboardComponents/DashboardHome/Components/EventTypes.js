import React from "react";
import auth from "../../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const EventTypes = () => {
  const [user] = useAuthState(auth);
  console.log(user?.photoURL);

  return (
    <div className="my-12">
      {/* Filter section */}
      <div>
        <div>
          <div className="input input-sm  flex flex-row">
            <span className="mr-[-2px]">🔎</span>
            <input
              type="text"
              placeholder="Filter"
              class="input input-sm w-full max-w-lg focus:outline-none"
            />
          </div>
        </div>
        {/* Header section */}
        <div className="py-5 border-b-2 flex flex-row justify-between items-center">
          <div class="card bg-base-100">
            <div class="flex flex-row">
              <div class="avatar">
                <div class="w-10 md:w-12 rounded-full ring-offset-base-100">
                  <img src={user?.photoURL || ""} alt="N/A" />
                </div>
              </div>
              <div className="pl-3">
                <h3>{user?.displayName || 'Unknown user'}</h3>
                <p className="text-blue-600">@username</p>
              </div>
            </div>
          </div>
          <div>
            <button className="border-2 py-1 px-2 rounded-xl border-blue-500 hover:bg-blue-100">
            <span>➕</span>
            <span className="pl-1 text-blue-500">New event type</span>
            </button>
          </div>
        </div>
        {/* events details section */}
       
      </div>
    </div>
  );
};

export default EventTypes;
