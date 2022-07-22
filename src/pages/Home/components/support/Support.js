import React from "react";
import support from "../../../../media/images/support-bg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Support = () => {
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

        <div className="lg:mt-[-250px] flex justify-center mt-[-280px] md:mt-[-250px]">
          <div className=" bg-base-100 shadow-2xl rounded-3xl">
            <div className=" lg:px-10 md:px-10 px-4">
              <p className="font-semibold mt-3">
                Have questions? Give us a call and we'll walk you through it.
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
          navigation
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
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="card ml-10 mb-16 w-80 bg-base-100 shadow-xl border border-blue-200">
              <div className="card-body">
                <h2 className="text-xl font-bold text-center text-[#ef5541]">
                  24/7 Customer Support
                </h2>
                <p className="text-1xl">
                  HubSpot's award-winning customer support team is ready to help
                  you with all your technical questions, and can be reached by
                  live chat, email, or phone depending on your plan.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card ml-10 w-80 bg-base-100 shadow-xl border border-blue-200">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center text-[#ef5541]">
                  Services
                </h2>
                <p className="text-1xl">
                  Get up and running quickly with a personalized onboarding
                  plan. Then maximize results along the way with premium
                  training, ongoing consulting, and technical services.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card ml-10 w-80 bg-base-100 shadow-xl border border-blue-200">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center text-[#ef5541]">
                  Education
                </h2>
                <p className="text-1xl">
                  From blog articles to online courses to comprehensive
                  certifications, HubSpot offers no shortage of free educational
                  content to help your whole team stay ahead of the curve as you
                  grow.
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
