import React from "react";
import bg from "../../../../media/images/slide/bg.jpg";
import doctor from "../../../../media/images/slide/doctor1.jpg";
import business from "../../../../media/images/slide/business1.jpg";
import education from "../../../../media/images/slide/education1.jpg";
// -----
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, Scrollbar, A11y]}
        // slidesPerView={"auto"}
        centeredSlides={true}
        // spaceBetween={0}
        // navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="  ">
          <SwiperSlide>
            <div className="p-5 ">
              <div className="">
                {/* <h1 className="  p-5 text-xl  py-5 flex text-center justify-center ">
                  We are making appointments with Doctors
                </h1> */}
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={doctor} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-blue text-[#6099d0]">
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
              <div className="mt-2 flex justify-center">
                <button className=" btn btn-primary button-orange  ">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-5">
              <div>
                {/* <h1 className=" p-5 text-xl py-5 text-center justify-center">
                  We are arranging business meetings.
                </h1> */}
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={business} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-orange text-[#FF5722]">
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
              <div className="mt-2 flex justify-center">
                <button className="btn btn-primary button-orange">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-5">
              <div>
                {/*  <h1 className="p-5 text-xl py-5 text-center justify-center">
                  We are arranging educational meetings.
                </h1> */}
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                  <div>
                    <img className="" src={education} alt="" />
                  </div>
                  <div className="flex justify-start items-center ">
                    <div>
                      <h3 className="lg:text-left font-bold  lg:text-2xl  text-my-green text-[#13d58b]">
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
              <div className="mt-2 flex justify-center">
                <button className="btn btn-primary button-orange">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
