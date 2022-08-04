import React, { useEffect, useState } from "react";
import auth from "../../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useUserEvents from "../../../../../hooks/useUserEvents";

const EventTypes = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    const userNameFirstLetter = user?.displayName?.charAt(0);
    setFirstLetter(userNameFirstLetter);
  }, [user]);

  const { isLoading, error, userEvents, refetch } = useUserEvents();
  console.log(userEvents);

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
        <div className="py-5 border-b-2 flex flex-col md:flex-row justify-between items-center">
          <div class="card bg-base-100">
            <div class="flex flex-row">
              <div class="avatar">
                <div class="w-10 md:w-12 rounded-full ring-offset-base-100">
                  {user?.photoURL ? (
                    <img src={user?.photoURL || ""} alt="N/A" />
                  ) : (
                    <div className="w-full bg-red-400 h-full text-center flex items-center justify-center">
                      <p className="text-lg">{firstLetter}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-3">
                <h3>{user?.displayName || "Unknown user"}</h3>
                <p className="text-blue-600">{user?.email}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <button
              onClick={() => navigate("/dashboard/event-type")}
              className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100"
            >
              <span>➕</span>
              <span className="pl-1 text-blue-500">New event type</span>
            </button>
          </div>
        </div>
        {/* events details section */}
        <div>
          <div>
            <h2 className="mt-10 font-semibold text-start text-2xl">OneOnOne Event's</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 md:mt-8">
              <div class="card bg-base-100 shadow-xl border-t-4 border-red-500">
                <div class="pt-2 pr-5 pl-5 pb-5">
                  <div className="flex justify-end">
                    <button className="button-orange-border-h40">Edit</button>
                  </div>
                  <div className="mt-2 md:mt-5">
                    <h4 className="text-2xl">Event Name</h4>
                    <p className="font-thin text-slate-400">
                      Event duration, Event Type
                    </p>
                    <p className="my-2 md:my-3 text-blue-600 hover:cursor-pointer hover:underline">
                      View booking page
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-blue-600 hover:cursor-pointer">
                      Copy Link
                    </p>
                    <button className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mt-10 font-semibold text-start text-2xl">Group Event's</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 md:mt-8">
              <div class="card bg-base-100 shadow-xl border-t-4 border-red-500">
                <div class="pt-2 pr-5 pl-5 pb-5">
                  <div className="flex justify-end">
                    <button className="button-orange-border-h40">Edit</button>
                  </div>
                  <div className="mt-2 md:mt-5">
                    <h4 className="text-2xl">Event Name</h4>
                    <p className="font-thin text-slate-400">
                      Event duration, Event Type
                    </p>
                    <p className="my-2 md:my-3 text-blue-600 hover:cursor-pointer hover:underline">
                      View booking page
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-blue-600 hover:cursor-pointer">
                      Copy Link
                    </p>
                    <button className="border-2 py-1 px-2 rounded-xl border-blue-400 hover:bg-blue-100 text-blue-500">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTypes;
