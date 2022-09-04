import React, { useContext } from "react";
import DarkContext from "../../../DarkMode/DarkContext";
import Feature from "./Feature";

const PowerfulFeatures = () => {
  const { toggle } = useContext(DarkContext);

  const features = [
    {
      icon: "https://i.ibb.co/9wvtnkF/reminder.png",
      name: "Reduce no shows with reminders",
      description:
        "Automatic reminders and notifications significantly reduce no show and admin works",
    },
    {
      icon: "https://i.ibb.co/qyX2rzy/team.png",
      name: "Scheduling for the whole team",
      description:
        "Display your teams availability for bookings, from multiple locations, all in one place.",
    },
    {
      icon: "https://i.ibb.co/gTPh6Vp/image-box.webp",
      name: "Video/Virtual meeting links",
      description:
        "Automatically create unique Zoom, Google Meet, and MS Teams links for meetings scheduled.",
    },
    {
      icon: "https://i.ibb.co/9wLG6Q3/control.jpg",
      name: "Custom availability and control",
      description:
        "Set up custom availability, padding between appointments and appointment duration.",
    },
    {
      icon: "https://i.ibb.co/0mY1Sjc/zapier.webp",
      name: "Automate with Zapier",
      description:
        "Seamless integration with Zapier to use your booking data with 1000's of services.",
    },
    {
      icon: "https://i.ibb.co/P17sj3Q/style.jpg",
      name: "Complete control over your style",
      description:
        "Design and style your booking page to match your colors and branding.",
    },
  ];
  return (
    <div
      className={
        toggle === true
          ? "text-center bg-gray-100  py-16"
          : "text-center bg-[#334155] py-16"
      }
    >
      <div className="mb-16">
        <h1
          className={
            toggle === true
              ? "text-4xl font-semibold "
              : "text-4xl font-semibold text-white"
          }
        >
          Powerful Feature
        </h1>
        <p className={toggle === true ? "py-4 " : "py-4 text-white"}>
          <span>
            {" "}
            Simple,easy to use features to help automate scheduling with yours
            customers
          </span>
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10 px-5 justify-items-center"
      >
        {features.map((feature) => (
          <Feature feature={feature} toggle={toggle}></Feature>
        ))}
      </div>
    </div>
  );
};

export default PowerfulFeatures;
