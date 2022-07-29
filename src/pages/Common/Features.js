import React from "react";
import img1 from "../../media/images/features/img1.webp";
import img2 from "../../media/images/features/img2.webp";
import img3 from "../../media/images/features/img3.webp";
import card1 from "../../media/images/features/card1.webp";
import card2 from "../../media/images/features/card2.webp";
import Navbar from "../Home/components/Navbar/Navbar";

const Features = () => {
  return (
    
    <div className="min-h-screen ">
      <Navbar />
      {/* top banner */}
      <div className="-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center">
        <div class="">
          <h2 className=" text-gray-800 lg:text-6xl  text-3xl text-center font-bold">
            Take control of scheduling
          </h2>
          <p className="mt-10 text-center">
            Scheduling is hard work. Use our powerful features to make
            scheduling fast and easy.
          </p>
        </div>
      </div>

      {/* feature - 1 */}
      <div class="card lg:card-side  mx-12 mb-8">
        <figure>
          <img className="w-[600px]" src={img1} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl my-5">Manage your availability</h2>

          <h3 className="text-1xl font-bold ">
            Flexible schedule and availability
          </h3>
          <p className="text-sm font-sans">
            Set up a regular weekly schedule or customize for every week.
            Complete control over when you want to schedule meetings.
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              Duration and appointment padding
            </h3>
            <p className="text-sm font-sans">
              Offer fixed appointment durations or give customers a choice. Add
              padding between appointments for preparation or travel time.
            </p>
          </div>
          <h3 className="text-1xl font-bold ">
            Time zones automatically detected
          </h3>
          <p className="text-sm font-sans">
            Time zones completely solved. We automatically detect time zones so
            everyone sees the right times.
          </p>
          <div class=" justify-start">
            <button class="btn button-orange text-white"> Learn More</button>
          </div>
        </div>
      </div>
      {/* card - 1 */}
      <div class="card lg:card-side bg-base-100 shadow-xl mx-12 my-8">
        <figure>
          <img src={card1} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Not enough hours in a day? Let’s fix that</h2>
          <p>
            Start our 14-day free trial and try our powerful features that let
            you spend less time scheduling and more time driving results.{" "}
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
          <h2 class="card-title text-3xl my-5">Customizable notifications</h2>

          <h3 className="text-1xl font-bold ">Confirmations and reminders</h3>
          <p className="text-sm font-sans">
            Brand and customize confirmation emails. Reduce no shows with email
            and SMS reminders.
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              Customize your calendar events
            </h3>
            <p className="text-sm font-sans">
              Set up how new booking events appear in your calendar. Include
              information entered by customers at time of booking.
            </p>
          </div>
          <h3 className="text-1xl font-bold ">Automated follow-up emails</h3>
          <p className="text-sm font-sans">
            Send follow-up emails after your meeting to thank customers or
            outline next steps.
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
      <div class="card lg:card-side bg-base-100 shadow-xl mx-12 my-8">
        <figure>
          <img src={card2} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Need help setting up a large team?</h2>
          <p>
            From startup to enterprise teams, our experts are ready to help.
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
          <h2 class="card-title text-3xl my-5">Integrations</h2>

          <h3 className="text-1xl font-bold ">
            Google and Microsoft Calendars
          </h3>
          <p className="text-sm font-sans">
            We seamlessly connect with Google and Microsoft calendars so you
            don't have to spend time managing a new calendar tool
          </p>
          <div className="my-5">
            <h3 className="text-1xl font-bold ">
              Zoom, Google Meet and MS Teams
            </h3>
            <p className="text-sm font-sans">
              Automatically create unique virtual meeting links for meetings
              scheduled through YouCanBook.me.
            </p>
          </div>
          <h3 className="text-1xl font-bold ">Gmail and Stripe</h3>
          <p className="text-sm font-sans">
            Improve delivery rates by sending your notification emails via your
            own Gmail account. Keep a record of all notifications sent. Connect
            your Stripe account and take payments for bookings.
          </p>
          <div class=" justify-start">
            <button class="btn button-orange text-white"> Learn More</button>
          </div>
        </div>
      </div>
      {/* fast and easy */}
      <div className="-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center">
        <div class="">
          <h2 className=" text-gray-800 lg:text-4xl  text-3xl text-center font-bold">
            Getting started is fast and easy
          </h2>
          <p className=" my-4 text-sm text-center ">
            Get started with a FREE 14 day trial of our paid plan to test out
            all the features.
          </p>
          <div className="lg:flex grid  grid-cols-1 justify-center lg:gap-10 gap-5">
            <button className="btn button-orange text-white">
              get started for FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
