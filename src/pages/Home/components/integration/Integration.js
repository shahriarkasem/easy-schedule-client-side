import React, { useContext } from "react";
import integration from "../../../../media/images/integration.png";
import DarkContext from "../../../DarkMode/DarkContext";

const Integration = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <section
      className={
        toggle === true
          ? "px-12 mt-6 py-24 bg-[#F5F9FA]"
          : "px-12 mt-6 py-24 bg-slate-700"
      }
    >
      <div className="lg:flex items-center lg:px-36 px-5">
        <div className="lg:ml-12">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className={
              toggle === true
                ? "lg:text-4xl text-2xl font-semibold mb-5 text-black"
                : "lg:text-4xl text-2xl font-semibold mb-5   text-white"
            }
            // className="lg:text-4xl text-2xl font-bold mb-2  text-gray-600 "
          >
            {/* text-[#ef7841] */}
            With integrations that <br /> make your life easier
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <span className={toggle === true ? " text-gray-600" : "text-white"}>
              Google Calendar, Outlook Calendar, Zoom, Microsoft Teams,
              Salesforce, Stripe, webhooks, custom Lambda functions, and many
              more.
            </span>
          </p>
        </div>
        <div>
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mt-6 w-80 lg:w-full lg:mr-24"
            src={integration}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Integration;
