import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OneOnOne = () => {
  const [eventLocation, setEventLocation] = useState();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    // console.log(data);
    // console.log(event.target);
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
              <select class="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>In-person meeting</option>
                <option>Phone call</option>
                <option>Google Meet</option>
                <option>Zoom</option>
                <option>Microsoft Teams</option>
                <option>Webex</option>
                <option>GoTo Meeting</option>
                <option>Custom</option>
                <option>Ask invitee</option>
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
            <input className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-5 md:mt-5 ml-20 cursor-pointer" type="submit" value="Next" />
          </form>
          <div className="mt-[-32px] ml-3">
          <button onClick={() => window.history.back()} className="">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;
