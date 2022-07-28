import React from "react";
import img1 from "../../media/images/features/img1.webp";
import card1 from "../../media/images/features/card1.webp";

const Features = () => {
  return (
    <div className="min-h-screen ">
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
          <img className="w-[600px]" src={img1} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Features;
