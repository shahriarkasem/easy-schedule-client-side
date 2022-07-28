import React from "react";
import Footer from "../Home/components/Footer/Footer";
import Navbar from "../Home/components/Navbar/Navbar";
import card1 from "../../media/images/howItWorks/card1.webp";

const HowItWorks = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        {/* top banner */}
        <div className="text-center min-h-16">
          <h1 className="text-5xl font-bold">How it works</h1>
          <p className="text-2xl my-2">
            Find out how YouCanBook.me works to simplify scheduling for you and
            your team.
          </p>
        </div>

        {/* how its work card */}
        <div class="card lg:card-side mx-8">
          <figure>
            {/* "https://placeimg.com/400/400/arch"  bg-base-100 shadow-xl */}
            <img className="w-1/2" src={card1} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Connect your calendar</h2>
            <p>
              First, connect your Google or Microsoft Outlook.com / Office 365
              calendar to YouCanBook.me. We use this calendar to check your
              availability. We also add new events to this calendar when someone
              schedules time with you.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HowItWorks;
