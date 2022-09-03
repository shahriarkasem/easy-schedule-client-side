import React, { useContext } from "react";
import schedule from "../../../../media/images/schedule.jpg";
import DarkContext from "../../../DarkMode/DarkContext";

const Schedule = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <div className="lg:my-20 my-10">
      <div className="md:mx-20 lg:mx-36">
        <div
          className={
            toggle === true
              ? "card lg:card-side bg-base-100 shadow-xl p-8"
              : "card lg:card-side bg-slate-600 shadow-xl p-8"
          }
        >
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
              className={
                toggle === true
                  ? "text-black text-4xl font-semibold mb-5"
                  : "text-white text-4xl font-semibold mb-5"
              }
            >
              Working 24/7 to fill <br /> your schedule!
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <span
                className={toggle === true ? "text-gray-600" : "text-white"}
              >
                {" "}
                With sequarespace scheduling, clients can quickly view your
                availability and book their own classes or appointments. They
                can even pay online and reschedule with a click. Never ask "what
                time works for you? again.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
