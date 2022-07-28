import React from "react";
import card1 from "../../media/images/howItWorks/card1.webp";
import card3 from "../../media/images/howItWorks/card3.webp";
import card4 from "../../media/images/howItWorks/card4.webp";
import card5 from "../../media/images/howItWorks/card5.webp";
import card6 from "../../media/images/howItWorks/card6.webp";

const HowItWorks = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* top banner */}
        <div className="-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center">
          <div class="">
            <h2 className=" text-gray-800 lg:text-6xl  text-3xl text-center font-bold">
              How it works
            </h2>
            <p className="mt-10 text-center">
              Find out how Easy Schedule works to simplify scheduling for you
              and your team.
            </p>
          </div>
        </div>

        {/* how its work card - 1 */}

        <div className="  mb-40">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <img src={card1} alt="" />
            </div>
            <div>
              <h2 className="text-center lg:text-left lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl font-mono text-red-400 px-4"> 1</span>{" "}
                Connect your calendar
              </h2>
              <p className="text-2xl leading-normal font-sans  pb-10 w-full  lg:pr-20">
                First, connect your Google or Microsoft Outlook.com / Office 365
                calendar to YouCanBook.me. We use this calendar to check your
                availability. We also add new events to this calendar when
                someone schedules time with you.
              </p>
            </div>
          </div>
        </div>
        {/* how its work card - 2 */}
        <div className=" mx-10 mb-40 ">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <h2 className=" lg:text-right lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl font-mono text-red-400 px-4"> 2</span>{" "}
                Create your booking page
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pl-20">
                Next, create your first booking page. Enter your availability
                and choose the length of your appointments. Set up notifications
                to send to you, your team and your customers, and choose how
                your page looks to fit your brand.
              </p>
            </div>
            <div>
              <img src={card5} alt="" />
            </div>
          </div>
        </div>
        {/* how its work card - 3 */}
        <div className="  mb-40">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <img src={card3} alt="" />
            </div>
            <div>
              <h2 className="lg:text-left lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl font-mono text-red-400 px-4"> 3</span>{" "}
                Share your booking page
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pr-20">
                Now it's time to share your booking page link. You can share it
                via email, your CRM, your help desk or embed it into your
                website. Wherever you and your team connect with your customers,
                you can share your booking page link.
              </p>
            </div>
          </div>
        </div>

        {/* how its work card - 4 */}
        <div className=" mx-10 mb-40 ">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <h2 className="text-center  lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl  font-mono text-red-400 px-4">
                  {" "}
                  4
                </span>{" "}
                Customers schedule <br />
                appointments
              </h2>
              <p className="text-2xl leading-normal font-sans  pb-10 w-full  lg:pl-20">
                Customers can now schedule without any back and forth. We handle
                timezone differences and only offer times if you're free in your
                connected calendar. <br /> <br /> You can collect any
                information you need when your customers book. All which ensures
                a hassle free experience for you, your team and your customers.
              </p>
            </div>
            <div>
              <img src={card4} alt="" />
            </div>
          </div>
        </div>

        {/* how its work card - 5 */}
        <div className="  mb-40">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <img src={card5} alt="" />
            </div>
            <div>
              <h2 className="text-center lg:text-left lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl font-mono text-red-400 px-4"> 5</span>{" "}
                Bookings straight into <br />{" "}
                <span className="ml-16">your calendar</span>
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pr-20">
                A new event will appear in your connected calendar when your
                customers schedule an appointment. It includes all the details
                you need to know. This lets you track your schedule in one
                place, knowing you'll never be double booked.
              </p>
            </div>
          </div>
        </div>

        {/* how its work card - 6 */}
        <div className=" mx-10 mb-40 ">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <h2 className="text-center lg:text-left lg:text-4xl text-3xl font-bold py-10">
                <span className="text-5xl font-mono text-red-400 px-4"> 6</span>{" "}
                Meeting takes place
              </h2>
              <p className="text-2xl leading-normal  font-sans pb-10 w-full  lg:pl-20">
                Host virtual meetings using Zoom, Google Meet or MS Teams, or
                add location details for face to face meetings. Use automated
                confirmations and reminders to reduce no shows. Great news,
                you've automated scheduling meetings for you and your team!
              </p>
            </div>
            <div>
              <img src={card6} alt="" />
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
    </>
  );
};

export default HowItWorks;
