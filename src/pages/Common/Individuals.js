import React from "react";
import img1 from "../../media/images/Individuals/img1.webp";
import img2 from "../../media/images/Individuals/img2.webp";
import img3 from "../../media/images/Individuals/img3.webp";
import img4 from "../../media/images/Individuals/img4.webp";
import img5 from "../../media/images/Individuals/img5.webp";
import img6 from "../../media/images/Individuals/img6.webp";
import Navbar from "../Home/components/Navbar/Navbar";
const Individuals = () => {
  return (
    <div>
      <Navbar />
      {/* top banner  className="min-h-screen" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  mt-8">
        <div className="mt-10  ml-20">
          <h2 className="text-4xl font-bold pb-6 ">
            The genius way to <br /> work <span>better</span>
          </h2>
          <p className="text-2xl leading-normal  font-sans pb-10 w-full ">
            Calendly makes it easy to work smarter when you are working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Sign up for free
            </button>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>

      {/* 2nd banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  my-18 py-12 ">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="mt-10  ml-20">
          <h4 className="text-blue-600 p">THE EASY SCHEDULE BOOKING LINK</h4>
          <h2 className="text-3xl font-bold py-6 ">
            Save time with your own personalized booking links
          </h2>
          <p className="text-1xl leading-normal  font-mono pb-10 w-full ">
            Calendly makes it easy to work smarter when you are working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Get Your Link
            </button>
          </div>
        </div>
      </div>
      {/* 3nd banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  my-18 py-12 ">
        <div className="mt-10  ml-20">
          <h4 className="text-blue-600 p">A CURATED CALENDAR</h4>
          <h2 className="text-3xl font-bold py-6 ">Book up efficiently</h2>
          <p className="text-1xl leading-normal  font-mono pb-10 w-full ">
            When invitees select a meeting slot from your schedule, they only
            see the times you are available, and only the length and type of
            meeting you want to have. Your schedule fills up efficiently, and
            everyone avoids excess email exchanges.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
      {/* 4nd banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  my-18 py-12 ">
        <div>
          <img src={img4} alt="" />
        </div>
        <div className="mt-10  ml-20">
          <h4 className="text-blue-600 p">
            AUTOMATED NOTIFICATIONS and FOLLOW-UPS
          </h4>
          <h2 className="text-3xl font-bold py-6 ">
            Work like you have a personal assistant
          </h2>
          <p className="text-1xl leading-normal  font-mono pb-10 w-full ">
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups, you can focus on the work that
            builds your business and brings customers back for more.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* 5nd banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  my-18 py-12 ">
        <div className="mt-10  ml-20">
          <h4 className="text-blue-600 p">COLLECT PAYMENTS</h4>
          <h2 className="text-3xl font-bold py-6 ">Erase billing hassles</h2>
          <p className="text-1xl leading-normal  font-mono pb-10 w-full ">
            Stripe and PayPal integrations enable your clients to submit payment
            as soon as they schedule a meeting. You get paid on time, every
            time, without dealing with bills or invoices.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </div>
      {/* 6nd banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  my-18 py-12 ">
        <div>
          <img src={img6} alt="" />
        </div>
        <div className="mt-16  ml-20">
          <h4 className="text-blue-600 p">SCHEDULING AT SCALE</h4>
          <h2 className="text-3xl font-bold py-6 ">Retain more clients</h2>
          <p className="text-1xl leading-normal  font-mono pb-10 w-full ">
            Stripe and PayPal integrations enable your clients to submit payment
            as soon as they schedule a meeting. You get paid on time, every
            time, without dealing with bills or invoices.
          </p>
        </div>
      </div>

      {/* fast and easy */}
      <div className="-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center">
        <div class="">
          <h2 className=" text-gray-800 lg:text-4xl  text-3xl text-center font-bold">
            Do more with our integrations
          </h2>
          <p className=" my-4 text-sm text-center ">
            Smart scheduling will change the way you – and your tools – work
          </p>
          <div className="lg:flex grid  grid-cols-1 justify-center lg:gap-10 gap-5">
            <button class="btn btn-info rounded-full text-white">
              View All
            </button>
            <button class="btn btn-outline btn-info rounded-full">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individuals;
