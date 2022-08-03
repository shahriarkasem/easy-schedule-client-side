import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../../../firebase.init";

const OneOnOne = () => {
  const [user] = useAuthState(auth);

  const [eventLocation, setEventLocation] = useState();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const userEmail = user?.email;
    const eventType = 'OneOnOne';
    const eventName = data.eventName;
    const description = data.description;
    const eventLink = data.eventLink;
    const location = event.target.location.value;
    const fullData = { userEmail, eventType, eventName, description, eventLink, location };
    axios({
      method: 'POST',
      headers: {
        // authorization
      },
      url: `http://localhost:5000/event/create/OneOnOne`,
      data: fullData,
    }).then(res=>{
      // console.log(res)
    }).catch(error => {
      // console.log(error);
    })
  };

  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row justify-start my-10 items-center pb-3 md:pb-5 border-b-2 drop-shadow-xl">
        <button
          onClick={() => window.history.back()}
          className="btn btn-outline btn-primary"
        >
          Back
        </button>
        <h4 className="text-center w-full font-semibold text-2xl">
          Add One-on-One Event Type
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
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Event name</span>
              </label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventName", { required: true, maxLength: 40 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Location</span>
              </label>
              <select
                defaultValue={"DEFAULT"}
                class="select select-bordered"
                name="location"
              >
                <option disabled value="DEFAULT">
                  Pick one
                </option>
                <option value="In-person meeting">In-person meeting</option>
                <option value="Phone call">Phone call</option>
                <option value="Google Meet">Google Meet</option>
                <option value="Zoom">Zoom</option>
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Webex">Webex</option>
                <option value="GoTo Meeting">GoTo Meeting</option>
                <option value="Custom">Custom</option>
                <option value="Ask invitee">Ask invitee</option>
              </select>
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">
                  Description/Instructions
                </span>
              </label>
              <textarea
                rows={6}
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("description", { required: true, maxLength: 400 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Event link</span>
                <span class="label-text">easy-schedule.com/username</span>
              </label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventLink", { required: true, maxLength: 40 })}
              />
            </div>
            <input
              className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-5 md:mt-5 ml-20 cursor-pointer"
              type="submit"
              value="Next"
            />
          </form>
          <div className="mt-[-32px] ml-3">
            <button onClick={() => window.history.back()} className="">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;
