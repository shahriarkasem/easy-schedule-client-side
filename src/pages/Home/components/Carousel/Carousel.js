import React, { useContext } from "react";
import bg from "../../../../media/images/slide/bg.jpg";
import personal from "../../../../media/images/slide/personal.jpg";
import business from "../../../../media/images/slide/business1.jpg";
import education from "../../../../media/images/slide/education1.jpg";
// -----
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import DarkContext from "../../../DarkMode/DarkContext";
import { Link } from "react-router-dom";

const Carousel = () => {
  const { toggle, setToggle } = useContext(DarkContext);

  return (
    <div>
      {/* <div class="flex flex-col w-full border-opacity-50">
        <div class="divider"></div>
      </div> */}
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={"auto"}
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
        <SwiperSlide>
          <div className="p-5">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                <div>
                  <img className="rounded" src={business} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <div>
                    <h3
                      className={
                        "lg:text-left mb-2  lg:text-2xl  " +
                        (toggle === true ? "text-black" : "text-white")
                      }
                    >
                      Business Meeting
                    </h3>
                    <p className="lg:text-left ">
                      <span
                        className={
                          toggle === true ? " text-gray-700 " : "text-white"
                        }
                      >
                        {" "}
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        another user.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40 ">
                <div>
                  <img className="rounded" src={education} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <div>
                    <h3
                      className={
                        "lg:text-left mb-2  lg:text-2xl  " +
                        (toggle === true ? "text-black" : "text-white")
                      }
                    >
                      Educational Meeting
                    </h3>
                    <p className="lg:text-left ">
                      <span
                        className={
                          toggle === true ? " text-gray-700 " : "text-white"
                        }
                      >
                        {" "}
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        another user.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:p-10 p-5">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center lg:px-40">
                <div>
                  <img className="rounded" src={personal} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <div>
                    <h3
                      className={
                        "lg:text-left mb-2  lg:text-2xl  " +
                        (toggle === true ? "text-black" : "text-white")
                      }
                    >
                      Personal Meeting
                    </h3>
                    <p className="lg:text-left ">
                      <span
                        className={
                          toggle === true ? "text-gray-700 " : "text-white"
                        }
                      >
                        {" "}
                        Manage Demand with ease and schedule short appointments.
                        Keep User Informed about their upcoming meeting with
                        guest .
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
