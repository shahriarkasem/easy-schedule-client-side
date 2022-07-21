import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero ">
      <div class="hero-content flex-col lg:flex-row-reverse text-black flex">
        <div className="flex-auto w-1/2">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/q9pnLvw/banner-Pic.jpg"
          />
        </div>
        <div className="flex-auto lg:w-1/2 px-5 text-start ">
          <h1 class="lg:text-5xl font-bold ">APPOINTMENT</h1>
          <h1 class="lg:text-5xl  text-[#ef7841]">Booking</h1>
          <p class="py-6 text-start">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary button-orange">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
