import React from "react";
import schedule from "../../../../media/images/schedule.jpg";

const Schedule = () => {
  return (
    <div className="my-12">
      <div className="md:mx-20 lg:mx-36">
        <div className="card lg:card-side bg-base-100 shadow-xl p-8">
          <figure>
            {/* "https://placeimg.com/400/400/arch" */}
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="w-[400px]"
              src={schedule}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-4xl font-bold text-[#ef7841]"
            >
              Working 24/7 to fill <br /> your schedule!
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              With sequarespace scheduling, clients can quickly view your
              availability and book their own classes or appointments. They can
              even pay online and reschedule with a click. Never ask "what time
              works for you? again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
