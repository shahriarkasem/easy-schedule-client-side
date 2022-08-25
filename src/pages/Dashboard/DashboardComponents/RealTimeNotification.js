import {
  faBaseball,
  faBell,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const RealTimeNotification = ({ res }) => {
  console.log(res);
  const [user] = useAuthState(auth);

  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery(["notifications"], () =>
    fetch(`http://localhost:5000/event/invitation/${user?.email}`).then((res) =>
      res.json()
    )
  );
  refetch();
  // console.log(notification?.guestEmail === user?.email);
  return (
    <div>
      <div class="indicator">
        {notifications?.map((notification) => (
          <div>
            {notification?.emails === user?.email ? (
              <div className="  hover:display-none">
                <span
                  class="indicator-item badge badge-secondary"
                  style={{ width: "10px" }}
                >
                  {notifications.length}
                </span>
              </div>
            ) : (
              "dfskjkndsln"
            )}
          </div>
        ))}

        <button class="dropdown dropdown-end">
          <FontAwesomeIcon size="lg" style={{ hight: "20px" }} icon={faBell} />
          <div class="dropdown">
            <label tabindex="0" class="text-xl m-1">
              <i className="text-violet-800 fa-solid fa-bell"></i>
            </label>
            <div
              tabindex="0"
              class="dropdown-content card card-compact w-52 p-2 shadow bg-white h-[200px] overflow-auto"
            >
              {notifications?.map((notification) => (
                <div className="my-2  text-sm">
                  {notification?.emails === user?.email
                    ? `You have meeting with ${
                        notification.name
                      } on ${notification.finalData.date.slice(0, 10)} at ${
                        notification.finalData.inviteTime
                      } `
                    : "Latest updates! "}
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RealTimeNotification;
