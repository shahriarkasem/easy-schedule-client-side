import React, { useContext } from "react";
import card1 from "../../media/images/howItWorks/card1.webp";
import card3 from "../../media/images/howItWorks/card3.webp";
import card4 from "../../media/images/howItWorks/card4.webp";
import card5 from "../../media/images/howItWorks/card5.webp";
import card6 from "../../media/images/howItWorks/card6.webp";
import DarkContext from "../DarkMode/DarkContext";
import Navbar from "../Home/components/Navbar/Navbar";

const HowItWorks = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <>
      <Navbar />
      <div className={toggle === true ? "bg-white" : "bg-slate-700"}>
        {/* top banner */}
        <div
          className={
            toggle === true
              ? "-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center"
              : "-mx-5 p-20 mb-5 pb-40 flex justify-center items-center bg-slate-600"
          }
        >
          <div class="">
            <h2 className="lg:text-6xl  text-3xl text-center font-bold">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                How it works
              </span>
            </h2>
            <p className="mt-10 text-center">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Find out how Easy Schedule works to simplify scheduling for you
                and your team.
              </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  Connect your calendar
                </span>
              </h2>
              <p className="text-2xl leading-normal font-sans  pb-10 w-full  lg:pr-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  First, connect your Google or Microsoft Outlook.com / Office
                  365 calendar to YouCanBook.me. We use this calendar to check
                  your availability. We also add new events to this calendar
                  when someone schedules time with you.
                </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Create your booking page
                </span>
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pl-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Next, create your first booking page. Enter your availability
                  and choose the length of your appointments. Set up
                  notifications to send to you, your team and your customers,
                  and choose how your page looks to fit your brand.
                </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Share your booking page
                </span>
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pr-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Now it's time to share your booking page link. You can share
                  it via email, your CRM, your help desk or embed it into your
                  website. Wherever you and your team connect with your
                  customers, you can share your booking page link.
                </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Customers schedule{" "}
                </span>
                <br />{" "}
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  appointments
                </span>
              </h2>
              <p className="text-2xl leading-normal font-sans  pb-10 w-full  lg:pl-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Customers can now schedule without any back and forth. We
                  handle timezone differences and only offer times if you're
                  free in your connected calendar.
                </span>
                <br /> <br />{" "}
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  You can collect any information you need when your customers
                  book. All which ensures a hassle free experience for you, your
                  team and your customers.
                </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Bookings straight into
                </span>
                <br />{" "}
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  <span className="ml-16">your calendar</span>
                </span>
              </h2>
              <p className="text-2xl leading-normal font-sans pb-10 w-full  lg:pr-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  A new event will appear in your connected calendar when your
                  customers schedule an appointment. It includes all the details
                  you need to know. This lets you track your schedule in one
                  place, knowing you'll never be double booked.
                </span>
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
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Meeting takes place
                </span>
              </h2>
              <p className="text-2xl leading-normal  font-sans pb-10 w-full  lg:pl-20">
                <span
                  className={toggle === true ? "text-gray-800" : "text-white"}
                >
                  {" "}
                  Host virtual meetings using Zoom, Google Meet or MS Teams, or
                  add location details for face to face meetings. Use automated
                  confirmations and reminders to reduce no shows. Great news,
                  you've automated scheduling meetings for you and your team!
                </span>
              </p>
            </div>
            <div>
              <img src={card6} alt="" />
            </div>
          </div>
        </div>

        {/* fast and easy */}
        <div
          className={
            toggle === true
              ? "-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center"
              : "-mx-5 bg-slate-600 p-20 pb-40 flex justify-center items-center"
          }
        >
          <div class="">
            <h2 className=" text-gray-800 lg:text-4xl  text-3xl text-center font-bold">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Getting started is fast and easy
              </span>
            </h2>
            <p className=" my-4 text-sm text-center ">
              <span
                className={toggle === true ? "text-gray-800" : "text-white"}
              >
                {" "}
                Get started with a FREE 14 day trial of our paid plan to test
                out all the features.
              </span>
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
