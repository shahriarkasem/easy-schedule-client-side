import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Workflows.css";
import img1 from "../../../../../../media/images/workflow/1.jpg";
import { useQuery } from "@tanstack/react-query";

const Workflows = () => {
  const {
    isLoading,
    error,
    data: workflowData,
    refetch,
  } = useQuery(["workflowData"], () =>
    fetch(`https://easyscheduler24.herokuapp.com/workflow`).then((res) =>
      res.json()
    )
  );
  refetch();
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  justify-items-center content-center items-center gap-6 my-10">
        <div>
          <h2 className=" text-4xl font-bold">Save time with workflows</h2>
          <p className="text-xl mt-5">
            Automate all the work you do around events, such as text messages
            when events are booked, email reminders before events, and more. You
            can start with a commonly used workflow or create your own.
          </p>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider"></div>
      </div>
      <div className="lg:flex grid grid-cols-1  justify-between my-5">
        <h2>
          Start with one of the common workflows below or create your own.
        </h2>
        <button className="btn btn-sm button-orange lg:mt-0 mt-5">
          Create your own workflow
        </button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-10">
        {workflowData?.map((flowData) => (
          <a href="/dashboard/d-home/CreateWorkflows">
            <div class="card rounded-none workflowShadow  hover:bg-gray-100 ">
              <div class="card-body">
                <h2 className="font-bold text-xl font-sans">
                  {flowData.title}
                </h2>
                <p className="text-[15px] font-sans ">
                  Never miss an event - get automated email reminders
                </p>
                <div class="card-actions justify-end">
                  <button class=" mt-5 btn btn-sm  button-orange ">
                    use workflow
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
