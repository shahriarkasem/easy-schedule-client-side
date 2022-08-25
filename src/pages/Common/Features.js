import React, { useContext } from "react";
import img1 from "../../media/images/features/img1.webp";
import img2 from "../../media/images/features/img2.webp";
import img3 from "../../media/images/features/img3.webp";
import card1 from "../../media/images/features/card1.webp";
import card2 from "../../media/images/features/card2.webp";
import Navbar from "../Home/components/Navbar/Navbar";
import DarkContext from "../DarkMode/DarkContext";
import Footer from "../Home/components/Footer/Footer";

const Features = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <div className={toggle === true ? "bg-white" : "bg-slate-700"}>
      <Navbar />
      {/* top banner */}
      <div
        className={
          toggle === true
            ? "-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center"
            : "-mx-5 bg-slate-600  p-20 mb-5 pb-40 flex justify-center items-center"
        }
      >
        <div class="">
          <h2 className=" text-gray-800 lg:text-6xl  text-3xl text-center font-bold">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Take control of scheduling
            </span>
          </h2>
          <p className="mt-10 text-center">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Scheduling is hard work. Use our powerful features to make
              scheduling fast and easy.
            </span>
          </p>
        </div>
      </div>

      {/* feature - 1 */}
      <div class="card lg:card-side  mx-12 mb-8">
        <figure>
          <img className="w-[600px]" src={img1} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl my-5">
            {" "}
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Manage your availability
            </span>
          </h2>

          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Flexible schedule and availability
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Set up a regular weekly schedule or customize for every week.
              Complete control over when you want to schedule meetings.
            </span>
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Duration and appointment padding
              </span>
            </h3>
            <p className="text-sm font-sans">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Offer fixed appointment durations or give customers a choice.
                Add padding between appointments for preparation or travel time.
              </span>
            </p>
          </div>
          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Time zones automatically detected
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Time zones completely solved. We automatically detect time zones
              so everyone sees the right times.
            </span>
          </p>
          <div class=" justify-start">
            <button class="btn button-orange text-white"> Learn More</button>
          </div>
        </div>
      </div>
      {/* card - 1 */}
      <div
        class={
          toggle === true
            ? "card lg:card-side bg-base-100 shadow-xl mx-12 my-8"
            : "card lg:card-side bg-slate-600 shadow-xl mx-12 my-8"
        }
      >
        <figure>
          <img src={card1} alt="Album" />
        </figure>
        <div class={toggle === true ? "card-body" : "card-body bg-slate-600"}>
          <h2 class="card-title">
            {" "}
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Not enough hours in a day? Let’s fix that
            </span>
          </h2>
          <p>
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Start our 14-day free trial and try our powerful features that let
              you spend less time scheduling and more time driving results.
            </span>{" "}
          </p>
          <div class="card-actions justify-start">
            <button class="btn button-orange text-white">
              {" "}
              get started for FREE
            </button>
          </div>
        </div>
      </div>
      {/* feature - 2 */}
      <div class="card lg:card-side  mx-12 mb-8">
        <div class="card-body">
          <h2 class="card-title text-3xl my-5">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Customizable notifications
            </span>
          </h2>

          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Confirmations and reminders
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Brand and customize confirmation emails. Reduce no shows with
              email and SMS reminders.
            </span>
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Customize your calendar events
              </span>
            </h3>
            <p className="text-sm font-sans">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Set up how new booking events appear in your calendar. Include
                information entered by customers at time of booking.
              </span>
            </p>
          </div>
          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Automated follow-up emails
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Send follow-up emails after your meeting to thank customers or
              outline next steps.
            </span>
          </p>
          <div class=" justify-start">
            <button class="btn button-orange text-white"> Learn More</button>
          </div>
        </div>
        <figure>
          <img className="w-[600px]" src={img2} alt="Album" />
        </figure>
      </div>
      {/* card - 2 */}
      <div
        class={
          toggle === true
            ? "card lg:card-side bg-base-100 shadow-xl mx-12 my-8"
            : "card lg:card-side bg-slate-600 shadow-xl mx-12 my-8"
        }
      >
        <figure>
          <img src={card2} alt="Album" />
        </figure>
        <div class={toggle === true ? "card-body" : "card-body bg-slate-600"}>
          <h2 class="card-title">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Need help setting up a large team?
            </span>
          </h2>
          <p>
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              From startup to enterprise teams, our experts are ready to help.
            </span>
          </p>
          {/* <div class="card-actions justify-start">
            <button class="btn button-orange text-white">
              {" "}
              get started for FREE
            </button>
          </div> */}
        </div>
      </div>
      {/* feature - 3 */}
      <div class="card lg:card-side  mx-12 mb-8">
        <figure>
          <img className="w-[600px]" src={img3} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl my-5">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Integrations
            </span>
          </h2>

          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Google and Microsoft Calendars
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              We seamlessly connect with Google and Microsoft calendars so you
              don't have to spend time managing a new calendar tool
            </span>
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Zoom, Google Meet and MS Teams
              </span>
            </h3>
            <p className="text-sm font-sans">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Automatically create unique virtual meeting links for meetings
                scheduled through YouCanBook.me.
              </span>
            </p>
          </div>
          <h3 className="text-1xl font-bold ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              Gmail and Stripe
            </span>
          </h3>
          <p className="text-sm font-sans">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Improve delivery rates by sending your notification emails via
              your own Gmail account. Keep a record of all notifications sent.
              Connect your Stripe account and take payments for bookings.
            </span>
          </p>
          <div class=" justify-start">
            <button class="btn button-orange text-white"> Learn More</button>
          </div>
        </div>
      </div>
      {/* fast and easy */}
      <div
        className={
          toggle === true
            ? "-mx-5 blog-bg-2  p-20 pb-40 flex justify-center items-center"
            : "-mx-5 bg-slate-600  p-20 pb-40 flex justify-center items-center"
        }
      >
        <div class="">
          <h2 className=" text-gray-800 lg:text-4xl  text-3xl text-center font-bold">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Getting started is fast and easy
            </span>
          </h2>
          <p className=" my-4 text-sm text-center ">
            <span className={toggle === true ? "text-gray-800" : "text-white"}>
              {" "}
              Get started with a FREE 14 day trial of our paid plan to test out
              all the features.
            </span>
          </p>
          <div className="lg:flex grid  grid-cols-1 justify-center lg:gap-10 gap-5">
            <button className="btn button-orange text-white">
              get started for FREE
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
