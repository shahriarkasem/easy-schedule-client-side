import React, { useEffect, useState } from "react";
import auth from "../../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useUserEvents from "../../../../../hooks/useUserEvents";
import UserEvents from "./EventTypesComponents/UserEvents";
import UpdateEvent from "./EventTypesComponents/UpdateEvent";
import LoadingAnimate from "../../../../Shared/LoadingAnimate";

const EventTypes = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, error, userEvents, refetch } = useUserEvents();
  const [firstLetter, setFirstLetter] = useState("");
  const [editEvent, setEditEvent] = useState(null);

  const handleEditEvent = (id) => {
    fetch(`https://easyscheduler24.herokuapp.com/event/single/${id}`)
      .then((res) => res.json())
      .then((data) => setEditEvent(data));
  };

  const [eventId, setEventId] = useState();
  const [eventLocation, setEventLocation] = useState();
  const [description, setDescription] = useState();
  const [eventDate, setEventDate] = useState();
  const [eventDuration, setEventDuration] = useState();
  const [eventName, setEventName] = useState();
  const [eventTime, setEventTime] = useState();
  const [eventType, setEventType] = useState();
  const [maxInvite, setMaxInvite] = useState();

  useEffect(() => {
    if (editEvent) {
      const {
        location,
        description,
        eventDate,
        eventDuration,
        eventName,
        eventTime,
        eventType,
        maxInvite,
        _id,
      } = editEvent;
      setEventLocation(location);
      setDescription(description);
      setEventDate(eventDate);
      setEventDuration(eventDuration);
      setEventName(eventName);
      setEventTime(eventTime);
      setEventType(eventType);
      setMaxInvite(maxInvite);
      setEventId(_id);
    }
  }, [editEvent]);

  useEffect(() => {
    const userNameFirstLetter = user?.displayName?.charAt(0);
    setFirstLetter(userNameFirstLetter);
  }, [user]);

  if (isLoading) {
    return <LoadingAnimate></LoadingAnimate>;
  }

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 md:mt-8">
              {userEvents &&
                userEvents.map((soloEvent, index) => (
                  <UserEvents
                    key={index}
                    soloEvent={soloEvent}
                    handleEditEvent={handleEditEvent}
                  ></UserEvents>
                ))}
            </div>
          </div>
        </div>
      </div>
      <UpdateEvent
        eventLocation={eventLocation}
        setEventLocation={setEventLocation}
        description={description}
        setDescription={setDescription}
        eventDate={eventDate}
        setEventDate={setEventDate}
        eventDuration={eventDuration}
        setEventDuration={setEventDuration}
        eventName={eventName}
        setEventName={setEventName}
        eventTime={eventTime}
        setEventTime={setEventTime}
        eventType={eventType}
        setEventType={setEventType}
        maxInvite={maxInvite}
        setMaxInvite={setMaxInvite}
        setEditEvent={setEditEvent}
        editEvent={editEvent}
        eventId={eventId}
        refetch={refetch}
      ></UpdateEvent>
    </div>
  );
};

export default EventTypes;
