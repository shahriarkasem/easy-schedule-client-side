import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero ">
      <div class="hero-content flex-col lg:flex-row-reverse text-black flex">
        <div className="flex-auto w-1/2">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            style={{ width: "100%" }}
            src="https://i.ibb.co/q9pnLvw/banner-Pic.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto lg:w-1/2 px-5 text-start ">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="lg:text-5xl text-2xl font-bold "
          >
            APPOINTMENT
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
            class="lg:text-5xl text-2xl text-[#ef7841]"
          >
            Booking
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="py-6 text-start"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            class="btn btn-primary button-orange"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
