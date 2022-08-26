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
  // const [notifications, setNotification] = useState([]);
  const [notiData, setNotiData] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/event/invitation/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // setNotification(data);
        setNotiData(data);
      });
  }, [user?.email]);

  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery(["notifications"], () =>
    fetch(`http://localhost:5000/event/invitation/${user?.email}`).then((res) =>
      res.json()
    )
  );
  const handleRead = () => {
    setNotiData([]);
  };
  refetch();
  return (
    <div>
      <div class="indicator">
        <button onClick={handleRead} class="dropdown dropdown-end">
          {notiData?.map((notification) => (
            <div>
              {notification?.emails === user?.email ? (
                <div className="  hover:display-none">
                  <span
                    class="indicator-item badge badge-secondary"
                    style={{ width: "10px" }}
                  >
                    <label>{notifications.length}</label>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          <FontAwesomeIcon size="lg" style={{ hight: "20px" }} icon={faBell} />
          <div class="dropdown">
            <div
              tabindex="0"
              class="dropdown-content card card-compact w-52 p-2 shadow bg-white h-[200px] overflow-auto"
            >
              {notifications?.map((notification) => (
                // console.log(notification)
                <div className="my-2  text-sm">
                  {notification?.emails === user?.email
                    ? `You have meeting with ${
                        notification?.name
                      } on ${notification?.date?.slice(0, 10)} at ${
                        notification?.inviteTime
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
