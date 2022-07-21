import React from "react";
import bg from "../../../../media/images/about/wave.svg";

const Aboutus = () => {
  return (
    <div>
      <div></div>
      <img src={bg} alt="" />
      <div class="hero min-h-screen ">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">We are Easy Schedulers</h1>
            <p class="py-6">
              Providing you with the best time schedule management web
              application service. we want to solve your schedule management
              problem and less time-consuming by waiting and moving. In other
              words, this can minimize the waiting time spent. Our passion for
              good schedule management services means that we provide our
              customers with nothing but the highest quality service, that are
              guaranteed to meet their needs and keep them satisfied! With a
              motivated team, we strive to be the creative minds that bring a
              smile to your face. That’s why we’re always looking for innovative
              new ways to get the best for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
