import React from "react";
import bg from "../../../../media/images/about/wave.png";
import bg2 from "../../../../media/images/about/wave1.png";
import bg1 from "../../../../media/images/about/wave.svg";
import bgwave from "../../../../media/images/about/bgwave.svg";
import about from "../../../../media/images/about/a.png";

const Aboutus = () => {
  return (
    <div className="lg:h-fit mb-36 ">
      <div class="w-full  flex justify-center ">
        <div class="flex justify-between  items-center ">
          <div className="">
            <div className=" lg:mt-20  mt-10">
              <h1 class="text-5xl font-bold py-5 text-center text-blue-500">
                We are Easy Scheduler
              </h1>
            </div>
            <div>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                <div className="w-48 lg:w-80  ">
                  <img className="flex  items-center" src={about} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <div>
                    <p className="lg:text-left px-5 ">
                      Providing you with the best time schedule management web
                      application service. we want to solve your schedule
                      management problem and less time-consuming by waiting and
                      moving. In other words, this can minimize the waiting time
                      spent. Our passion for good schedule management services
                      means that we provide our customers with nothing but the
                      highest quality service, that are guaranteed to meet their
                      needs and keep them satisfied! With a motivated team, we
                      strive to be the creative minds that bring a smile to your
                      face. That’s why we’re always looking for innovative new
                      ways to get the best for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
