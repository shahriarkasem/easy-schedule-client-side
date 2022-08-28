import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";
import { toast } from "react-toastify";
import LoadingAnimate from "../../../../../Shared/LoadingAnimate";

const ViewBooking = () => {
  const [emails, setEmails] = useState([]);

  const { id } = useParams(true);
  const navigate = useNavigate("");
  const [next, setNext] = useState(false);
  const {
    isLoading,
    error,
    data: userEvent,
    refetch,
  } = useQuery(["eventData"], () =>
    fetch(`http://localhost:5000/event/single/${id}`).then(
      (res) => res.json()
    )
  );

  const [date, setDate] = useState(new Date());
  const formattedDate = date && format(date, "PP");

  const [inviteTime, setInviteTime] = useState("");
  const [finalData, setFinalData] = useState();
  // console.log(finalData);
  useEffect(() => {
    const useData = {
      date,
      inviteTime,
      userEvent,
    };
    setFinalData(useData);
  }, [date, inviteTime, setDate, userEvent]);

  const time = (
    <>
      <li
        onClick={() => setInviteTime("09:00am")}
        className={`${inviteTime === "09:00am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        09:00am
      </li>
      <li
        onClick={() => setInviteTime("09:30am")}
        className={`${inviteTime === "09:30am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        09:30am
      </li>
      <li
        onClick={() => setInviteTime("10:00am")}
        className={`${inviteTime === "10:00am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        10:00am
      </li>
      <li
        onClick={() => setInviteTime("10:30am")}
        className={`${inviteTime === "10:30am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        10:30am
      </li>
      <li
        onClick={() => setInviteTime("11:00am")}
        className={`${inviteTime === "11:00am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        11:00am
      </li>
      <li
        onClick={() => setInviteTime("11:30am")}
        className={`${inviteTime === "11:30am" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        11:30am
      </li>
      <li
        onClick={() => setInviteTime("12:00pm")}
        className={`${inviteTime === "12:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        12:00pm
      </li>
      <li
        onClick={() => setInviteTime("12:30pm")}
        className={`${inviteTime === "12:30pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        12:30pm
      </li>
      <li
        onClick={() => setInviteTime("01:00pm")}
        className={`${inviteTime === "01:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        01:00pm
      </li>
      <li
        onClick={() => setInviteTime("01:30pm")}
        className={`${inviteTime === "01:30pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        01:30pm
      </li>
      <li
        onClick={() => setInviteTime("02:00pm")}
        className={`${inviteTime === "02:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        02:00pm
      </li>
      <li
        onClick={() => setInviteTime("02:30pm")}
        className={`${inviteTime === "02:30pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        02:30pm
      </li>
      <li
        onClick={() => setInviteTime("03:00pm")}
        className={`${inviteTime === "03:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        03:00pm
      </li>
      <li
        onClick={() => setInviteTime("03:30pm")}
        className={`${inviteTime === "03:30pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        03:30pm
      </li>
      <li
        onClick={() => setInviteTime("04:00pm")}
        className={`${inviteTime === "04:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        04:00pm
      </li>
      <li
        onClick={() => setInviteTime("04:30pm")}
        className={`${inviteTime === "04:30pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        04:30pm
      </li>
      <li
        onClick={() => setInviteTime("05:00pm")}
        className={`${inviteTime === "05:00pm" && "bg-gray-500 text-white"
          } cursor-pointer border px-4 py-1 my-2 rounded-lg`}
      >
        05:00pm
      </li>
    </>
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = userEvent?.userName;
    const email = userEvent?.userEmail;
    const emails = data.emails;

    const invitation = { name, email, emails, date, inviteTime, userEvent };
    console.log(invitation);
    axios({
      method: "POST",
      headers: {
        // authorization
      },
      url: `http://localhost:5000/event/invitation`,
      data: invitation,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Event created successfully");
          navigate(`/booking-confirm/${res.data.insertedId}`);
        }
        console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  if (isLoading) {
    return <LoadingAnimate></LoadingAnimate>;
  }

  return (
    <div className={"min-h-screen mb-5 md:mb-10 lg:mb-16"}>
      {userEvent && (
        <div>
          {/* Date picker */}
          <div
            className={`flex flex-col lg:flex-row justify-center mx-5 lg:mx-40 mt-10 md:mt-20`}
          >
            <div className="border-2 rounded-l-lg">
              <div className="p-5">
                {next && (
                  <div className="flex justify-start ml-[-6px] pt-2 md:pt-4 pb-4 md:pb-8">
                    <p
                      onClick={() => setNext(false)}
                      className="text-3xl cursor-pointer hover:bg-blue-400 rounded-lg"
                    >
                      ⬅️
                    </p>
                  </div>
                )}
                <h5 className="text-gray-500">{userEvent?.userName}</h5>
                <h6 className="font-semibold text-xl my-1">
                  {userEvent?.eventName}
                </h6>
                <p className="text-gray-500 mt-5 mb-2">
                  <span>⌚</span> Duration: {userEvent?.eventDuration} min
                </p>
                <p className="text-gray-500 mb-2">
                  <span>🎥</span> Web conferencing details provided upon
                  confirmation.
                </p>
                {formattedDate && (
                  <p className="text-gray-500">
                    <span>🗓️</span> {inviteTime && inviteTime + ","}{" "}
                    {formattedDate}
                  </p>
                )}
                <br />
                <p className="pb-5 md:pb-10">{userEvent?.description}</p>
              </div>
            </div>
            <div className={` ${next && "hidden"}`}>
              <div class="p-5 border-2 rounded-r-lg">
                <div className="flex items-center flex-col md:flex-row pr-20">
                  <div>
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </div>
                  <div className="px-5 w-40">
                    <p className="mt-1 ml-2 mb-2">{formattedDate}</p>
                    <div className="h-60 w-48 overflow-y-scroll">
                      <ul className="flex flex-col">{time}</ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end lg:pr-8">
                  <button
                    onClick={() => setNext(true)}
                    disabled={!date || !inviteTime || !userEvent}
                    className="btn btn-success btn-outline"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className={`border-2 rounded-r-lg ${!next && "hidden"}`}>
              <div className="p-5">
                <h2 className="font-semibold text-xl">Enter Details</h2>
                <div className="pl-0 md:pl-10 my-10 md:my-10 m-1">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-md mt-3 md:mt-5">
                      <label class="label">
                        <span class="label-text font-semibold">Name</span>
                      </label>
                      <input
                        disabled
                        value={userEvent?.userName}
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("name", { maxLength: 40 })}
                      />
                    </div>

                    <div class="form-control w-full max-w-md mt-3 md:mt-5">
                      <label class="label">
                        <span class="label-text font-semibold">Email</span>
                      </label>
                      <input
                        disabled
                        value={userEvent?.userEmail}
                        type="email"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("email", {
                          maxLength: 60,
                        })}
                      />
                    </div>

                    {/* guest multi mails */}
                    <div class="form-control w-full max-w-md mt-3 md:mt-5">
                      <label class="label">
                        <span class="label-text font-semibold">
                          {" "}
                          Guest email's
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder=""
                        class="input input-bordered w-full max-w-md"
                        {...register("emails", {
                          required: true,
                          maxLength: 60,
                        })}
                      />
                    </div>

                    {/* react multi mails */}
                    <div></div>

                    <div class="form-control w-full max-w-md mt-3 md:mt-5">
                      <label class="label">
                        <span class="label-text font-semibold">
                          Please share anything that will help prepare for our
                          meeting.
                        </span>
                      </label>
                      <textarea
                        rows={4}
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full max-w-md min-h-16"
                        {...register("details", {
                          required: true,
                          maxLength: 400,
                        })}
                      />
                    </div>

                    <input
                      className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-5 md:mt-6 lg:mt-8 cursor-pointer"
                      type="submit"
                      value="Schedule Event"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!userEvent && (
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-center text-2xl font-semibold mt-10 md:mt-20 text-red-600">
            Something went wrong! Please try again later
          </h3>
          <button
            className="btn btn-primary w-fit mt-10 md:mt-16 btn-outline"
            onClick={() => navigate("/")}
          >
            Homepage
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewBooking;
