import React from "react";
import bg from "../../../../media/images/slide/bg.jpg";
import doctor from "../../../../media/images/slide/doctor1.jpg";
import business from "../../../../media/images/slide/business1.jpg";
import education from "../../../../media/images/slide/education1.jpg";

const Carousel = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full h-[450px] m-10 flex justify-center"
        >
          {/* <img src={bg} class="w-full" /> */}
          <div class="absolute flex justify-between  items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <div className="">
              <div>
                <h1 className=" text-xl py-5">
                  We are making appointments with Doctors
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={doctor} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-blue">
                        Doctors Appointments
                      </h3>
                      <p className="lg:text-left ">
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        doctors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 ">
                <button className="btn text-red-100 text-my-default  bg-my-blue border-none hover:bg-my-blue-hover  ">
                  Get Started
                </button>
              </div>
            </div>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="" class="w-full" />
          <div class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <div className="">
              <div>
                <h1 className=" text-xl py-5">
                  We are arranging business meetings.
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={business} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-orange">
                        Business Meeting
                      </h3>
                      <p className="lg:text-left ">
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        another user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <button className="btn text-my-default bg-my-orange border-none hover:bg-my-orange-hover ">
                  Get Started
                </button>
              </div>
            </div>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          {/* <img src="" class="w-full" /> */}
          <div class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <div className="">
              <div>
                <h1 className=" text-xl py-5">
                  We are arranging educational meetings.
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={education} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-green">
                        Educational Meeting
                      </h3>
                      <p className="lg:text-left ">
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        another user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <button className="btn bg-my-green  text-my-default border-none hover:bg-my-green-hover  ">
                  Get Started
                </button>
              </div>
            </div>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
