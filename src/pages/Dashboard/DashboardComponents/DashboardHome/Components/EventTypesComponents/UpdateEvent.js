import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateEvent = ({
  eventLocation,
  setEventLocation,
  description,
  setDescription,
  eventDate,
  setEventDate,
  eventDuration,
  setEventDuration,
  eventName,
  setEventName,
  eventTime,
  setEventTime,
  eventType,
  setEventType,
  maxInvite,
  setMaxInvite,
  setEditEvent,
  editEvent,
  eventId,
  refetch,
}) => {
  const navigate = useNavigate("");

  const handleLocation = (e) => {
    const value = e.target.value;
    setEventLocation(value);
  };
  const handleDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };
  const handleDate = (e) => {
    const value = e.target.value;
    setEventDate(value);
  };
  const handleDuration = (e) => {
    const value = e.target.value;
    setEventDuration(value);
    console.log(value);
  };
  const handleEventName = (e) => {
    const value = e.target.value;
    setEventName(value);
  };
  const handleTime = (e) => {
    const value = e.target.value;
    setEventTime(value);
  };
  const handleType = (e) => {
    const value = e.target.value;
    setEventType(value);
  };
  const handleMaxInvite = (e) => {
    const value = e.target.value;
    setMaxInvite(value);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const location = eventLocation;
    const fullData = {
      eventName,
      eventDate,
      eventTime,
      eventDuration,
      description,
      maxInvite,
      location,
    };

    axios
      .patch(
        `https://easyscheduler24.herokuapp.com/update/event/${eventId}`,
        {
          eventName,
          eventDate,
          eventTime,
          eventDuration,
          description,
          maxInvite,
          location,
        }
        // {
        //     headers: {
        //         authorization: `${localStorage.getItem('accessTokenST')}`
        //     },
        // },
      )
      .then((res) => {
        if (res.status === 200) {
          toast("Successfully updated event!");
          navigate("/dashboard/d-home/event-types");
          // setEditEvent(null);
          refetch();
          return <label for="edit-event-modal" className="cursor-pointer"></label>;
        }
      })
      .catch((error) => {
        toast.error("Something went wrong! Please try again later");
        refetch();
      });
  };

  return (
    <div className="">
      <input type="checkbox" id="edit-event-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box min-h-screen">
          <div>
            <div className="my-20">
              <div className="flex flex-col md:flex-row justify-start my-10 items-center pb-3 md:pb-5 border-b-2 drop-shadow-xl">
                <label
                  for="edit-event-modal"
                  onClick={() => setEditEvent(null)}
                  className="btn btn-outline btn-primary cursor-pointer"
                >
                  Back
                </label>
                <h4 className="text-center w-full font-semibold text-2xl">
                  Update your event
                </h4>
              </div>
              <div className="border-2 rounded-md border-sky-800">
                <div>
                  <div className="px-5 pt-5">
                    <h5 className="font-semibold">What event is this?</h5>
                    <p className="font-thin text-slate-400">
                      {eventLocation ? eventLocation : "No location given"}
                    </p>
                  </div>
                </div>
                <div class="divider"></div>
                {/* react hook form */}
                <div className="pl-0 md:pl-10 my-10 md:my-10 m-1">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleEventName}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">Event name</span>
                      </label>
                      <input
                        value={eventName}
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("eventName", { maxLength: 40 })}
                      />
                    </div>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleLocation}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">Location</span>
                      </label>
                      <select
                        // defaultValue={"DEFAULT"}
                        value={eventLocation}
                        class="select select-bordered"
                        name="location"
                      >
                        <option disabled value="DEFAULT">
                          Pick one
                        </option>
                        <option value="In-person meeting">
                          In-person meeting
                        </option>
                        <option value="Google Meet">Google Meet</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleDate}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">Event date</span>
                      </label>
                      <input
                        value={eventDate}
                        type="date"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("eventDate", {})}
                      />
                    </div>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleTime}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">Event time</span>
                      </label>
                      <input
                        value={eventTime}
                        type="time"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("eventTime", {})}
                      />
                    </div>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleDuration}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">
                          Event duration -{" "}
                          <span className="font-thin text-xs">
                            Min 10min and Max 480min
                          </span>
                        </span>
                      </label>
                      <input
                        value={eventDuration}
                        type="number"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("eventDuration", {
                          min: 10,
                          max: 480,
                        })}
                      />
                    </div>
                    <div
                      class="form-control w-full max-w-md mt-3 md:mt-5"
                      onChange={handleDescription}
                    >
                      <label class="label">
                        <span class="label-text font-semibold">
                          Description/Instructions
                        </span>
                      </label>
                      <textarea
                        value={description}
                        rows={6}
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("description", { maxLength: 400 })}
                      />
                    </div>
                    {maxInvite && (
                      <div
                        class="form-control w-full max-w-md mt-3 md:mt-5"
                        onChange={handleMaxInvite}
                      >
                        <label class="label">
                          <span class="label-text font-semibold">
                            Max invitees in a spot
                          </span>
                        </label>
                        <input
                          value={maxInvite}
                          type="number"
                          placeholder=""
                          class="input input-bordered w-full max-w-md"
                          {...register("maxInvite", { min: 2, max: 99 })}
                        />
                      </div>
                    )}
                    <input
                      className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-5 md:mt-5 ml-20 cursor-pointer"
                      type="submit"
                      value="Update"
                    ></input>
                  
                  </form>
                  <div className="mt-[-32px] ml-3">
                    {
                      editEvent === null && <label
                      for="edit-event-modal"
                      onClick={() => setEditEvent(null)}
                      className="cursor-pointer"
                    >
                    </label>
                    }
                    <label
                      for="edit-event-modal"
                      onClick={() => setEditEvent(null)}
                      className="cursor-pointer"
                    >
                      Cancel
                    </label>
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

export default UpdateEvent;
