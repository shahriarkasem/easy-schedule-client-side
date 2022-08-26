import React from "react";
import { useNavigate } from "react-router-dom";
import oneOnOne from "../../../../../../media/images/eventTypes/one_on_one-6206433649431f0b4804 (1).svg";
import group from "../../../../../../media/images/eventTypes/group-7eac5d967740a9799590.svg";
import collective from "../../../../../../media/images/eventTypes/collective-4e201a8dd006b0d78f95.svg";
import roundRobin from "../../../../../../media/images/eventTypes/round_robin-310498d275de8c1f7e4a.svg";

import { Link } from "react-router-dom";

const EventTypesName = () => {
  const navigate = useNavigate();

  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row justify-start my-20 items-center">
        <button
          onClick={() => window.history.back()}
          className="btn btn-outline btn-primary"
        >
          Back
        </button>
        <h4 className="text-center w-full font-semibold text-2xl mt-5 md:mt-0">
          Create New Event Type
        </h4>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-20">
        <div className="flex flex-row items-center">
          <img className="w-" src={oneOnOne} alt="" />
          <div className="pl-4 md:pl-8">
            <h5 className="font-semibold">One-on-One</h5>
            <p>Let an invitee pick a time to meet with you.</p>
          </div>
        </div>
        <div className="flex md:justify-end w-full md:w-fit">
          <button
            onClick={() => navigate("/dashboard/event-type/one-on-one")}
            class="bg-blue-500 text-white px-4 py-3 rounded-3xl mt-5 md:mt-0 w-full md:w-fit"
          >
            Create
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-20">
        <div className="flex flex-row items-center">
          <img className="w-" src={group} alt="" />
          <div className="pl-4 md:pl-8">
            <h5 className="font-semibold">Group</h5>
            <p>Let multiple invitees meet with you at one time.</p>
          </div>
        </div>
        <div className="flex md:justify-end w-full md:w-fit">
          <button
            onClick={() => navigate("/dashboard/event-type/group")}
            class="bg-blue-500 text-white px-4 py-3 rounded-3xl mt-5 md:mt-0 w-full md:w-fit"
          >
            Create
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-20">
        <div className="flex flex-row items-center">
          <img className="w-" src={collective} alt="" />
          <div className="pl-4 md:pl-8">
            <h5 className="font-semibold">Collective</h5>
            <p>
              Host an event with another person and let invitees pick a time
              when you're all available.
            </p>
          </div>
        </div>
        <div className="flex md:justify-end w-full md:w-fit">
          <Link
            to="/coming"
            class="bg-blue-500 text-white px-4 py-3 rounded-3xl mt-5 md:mt-0 w-full md:w-fit"
          >
            Create
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-20">
        <div className="flex flex-row items-center">
          <img className="w-" src={roundRobin} alt="" />
          <div className="pl-4 md:pl-8">
            <h5 className="font-semibold">Round Robin</h5>
            <p>Create an event that cycles between multiple hosts.</p>
          </div>
        </div>
        <div className="flex md:justify-end w-full md:w-fit">
          <Link
            to="/coming"
            class="bg-blue-500 text-white px-4 py-3 rounded-3xl mt-5 md:mt-0 w-full md:w-fit "
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventTypesName;
