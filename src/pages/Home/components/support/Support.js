import React, { useContext } from "react";
import support from "../../../../media/images/support-bg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import DarkContext from "../../../DarkMode/DarkContext";

const Support = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <div className="mb-12">
      <div
        style={{
          background: `url(${support})`,
          backgroundSize: "cover",
        }}
        className="p-24 md:py-40"
      >
        <div>
          <h3 className="lg:text-3xl text-xl font-bold text-white text-center ">
            We've got your back — every step of the way.
          </h3>
          <p className="text-white text-center">
            Because you shouldn't have to figure it out on your own.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="lg:mt-[-250px] flex justify-center mt-[-280px] md:mt-[-250px]"
        >
          <div
            class={
              toggle === true
                ? " bg-base-100 shadow-2xl rounded-3xl"
                : " bg-slate-600 shadow-2xl rounded-3xl"
            }
          >
            <div class=" lg:px-10 md:px-10 px-4">
              <p className="font-semibold mt-3">
                <span className={toggle === true ? "text-black" : "text-white"}>
                  Have questions? Give us a call and we'll walk you through it.
                </span>
              </p>
              <p className="text-green-500 btn-link text-center">
                {" "}
                +1 855-825-7388
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-28 md:mt-[-50px] lg:mt-[-50px] mt-[-30px]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // slidesPerView={3}
          // centeredSlides={true}
          grabCursor={true}
          spaceBetween={0}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1312: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              class="card ml-10 mb-16 w-80 bg-base-100 shadow-xl "
            >
              <div
                class={toggle === true ? "card-body" : "card-body bg-slate-600"}
              >
                <h2 class="text-xl font-bold text-center">
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    24/7 Customer Support
                  </span>
                </h2>
                <p className="text-1xl">
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    {" "}
                    HubSpot's award-winning customer support team is ready to
                    help you with all your technical questions, and can be
                    reached by live chat, email, or phone depending on your
                    plan.
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              class="card ml-10 w-80 bg-base-100 shadow-xl "
            >
              <div class={toggle === true ? "card-body" : "card-body bg-slate-600"}>
                <h2 class="text-2xl font-bold text-center">
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    {" "}
                    Services
                  </span>
                </h2>
                <p>
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    {" "}
                    Get up and running quickly with a personalized onboarding
                    plan. Then maximize results along the way with premium
                    training, ongoing consulting, and technical services. Stay
                    with us.
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              class="card ml-10 w-80 bg-base-100 shadow-xl "
            >
              <div class={toggle === true ? "card-body" : "card-body bg-slate-600"}>
                <h2 class="text-2xl font-bold text-center">
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    Education
                  </span>
                </h2>
                <p>
                  <span
                    className={toggle === true ? "text-black" : "text-white"}
                  >
                    {" "}
                    From blog articles to online courses to comprehensive
                    certifications, HubSpot offers no shortage of free
                    educational content to help your whole team stay ahead of
                    the curve as you grow.
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Support;
