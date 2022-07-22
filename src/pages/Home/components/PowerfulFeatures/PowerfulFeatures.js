import React from "react";
import Feature from "./Feature";

const PowerfulFeatures = () => {
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
    <div className="mt-20 text-center">
      {/* text-2xl font-medium */}
      <h1 className=" mt-10 text-4xl font-bold  text-[#ef5541]">
        Powerful Feature
      </h1>
      <p className="py-4">
        Simple,easy to use features to help automate scheduling with yours
        customers
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-7 lg:px-40"
      >
        {features.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default PowerfulFeatures;
