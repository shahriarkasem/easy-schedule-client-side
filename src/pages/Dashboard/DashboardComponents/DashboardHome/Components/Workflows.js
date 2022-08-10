import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Workflows.css";
import img1 from "../../../../../media/images/workflow/1.jpg";

const Workflows = () => {
  const workflowData = [
    {
      title: "Email reminder to host",
      info: "Never miss an event - get automated email reminders",
    },
    {
      title: "Email reminder to Invitee",
      info: "Reduce no-shows - send automated email reminders to invitees",
    },
    {
      title: "Send thank you email",
      info: "Build relationships with a quick thanks",
    },
    {
      title: "Email additional resources",
      info: "Send Links for additional resources to your invitees",
    },
    {
      title: "Request follow-up meeting",
      info: "Don't wait to meet again",
    },
    {
      title: "Email your own feedback survey",
      info: "Email a survey link from a third party like Typeform or Google Forms to get feedback from invitees after your event",
    },
    {
      title: " Text booking confirmation to host",
      info: "Keep hosts up-to-date with schedule events",
    },
    {
      title: "Text reminder to invitee",
      info: "Reduce no-shows - send automated text reminders to invitees",
    },
    {
      title: "Text cancellation notification to invitee",
      info: "Let invitees known as soon as an event is cancelled",
    },
    {
      title: "Text follow-up to invitee",
      info: "Finish up by texting your invitees after an event",
    },
    {
      title: "Email invitees to confirm",
      info: "Reduce no-shows by asking your invitees to reconfirm they will attend your event.",
    },
    {
      title: "Text invitee to confirm",
      info: "Reduce no-shows by asking your invites to reconfirm they will attend your event",
    },
  ];
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
        {workflowData.map((flowData) => (
          <a href="">
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
