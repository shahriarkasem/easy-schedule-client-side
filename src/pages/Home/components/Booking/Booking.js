import React, { useContext, useState } from "react";
import allTImeBookings from "../../../../media/images/booking/alltimebooking.png";
import monthBookings from "../../../../media/images/booking/month.png";
import todayBookings from "../../../../media/images/booking/today.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import DarkContext from "../../../DarkMode/DarkContext";

const Booking = () => {
  const { toggle } = useContext(DarkContext);

  const [todayBooking, setTodayBooking] = useState(48805);
  const [monthBooking, setMonthBooking] = useState(1040870);
  const [allTimeBooking, setAllTimeBooking] = useState(81166964);

  return (
    <div className="lg:mt-24">
      <div class="divider"></div>
      <div className="md:mx-20 lg:mx-36  lg:mb-20">
        <h2 className=" font-medium lg:text-3xl text-center lg:my-20 my-5">
          <span className={toggle === true ? "text-black" : "text-white"}>
            We handle 1000's of
          </span>{" "}
          <span className="font-bold lg:text-4xl text-2xl text-[#ef7841]">
            bookings
          </span>{" "}
          <span className={toggle === true ? "text-black" : "text-white"}>
            {" "}
            for{" "}
          </span>
          <br />
          <span className={toggle === true ? "text-black" : "text-white"}>
            {" "}
            our users every single day
          </span>
        </h2>
        <div className="grid  grid-cols-3 lg:grid-cols-3 mt-4 lg:mx-40">
          <div
            className={
              toggle === true
                ? "mx-auto text-center"
                : "mx-auto text-center bg-slate-600 py-2 px-5 rounded-xl"
            }
          >
            <div className="flex justify-center mx-auto">
              <img className=" w-20" src={todayBookings} alt="" />
            </div>
            <div>
              <div
                className="text-xl md:text-2xl lg:text-2xl text-[#ef7841] font-bold  mt-3"
              >
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 30 }}>
                      {isVisible ? <CountUp end={todayBooking} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                <span
                  className={toggle === true ? "text-[#ef7841]" : "text-white"}
                >
                  weekly
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              toggle === true
                ? "mx-auto text-center"
                : "mx-auto text-center bg-slate-600 py-2 px-5 rounded-xl"
            }
          >
            <div className="flex justify-center mx-auto">
              <img className="w-20" src={monthBookings} alt="" />
            </div>
            <div>
              <div className="text-xl md:text-2xl lg:text-2xl text-[#ef7841] font-bold  mt-3">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 30 }}>
                      {isVisible ? <CountUp end={monthBooking} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                <span className={toggle === true ? "text-black" : "text-white"}>
                  monthly
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              toggle === true
                ? "mx-auto text-center"
                : "mx-auto text-center bg-slate-600 py-2 px-5 rounded-xl"
            }
          >
            <div className="flex justify-center mx-auto">
              <img className="w-20" src={allTImeBookings} alt="" />
            </div>
            <div>
              <h5 className="text-xl md:text-2xl lg:text-2xl  text-[#ef7841] font-bold  mt-3">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 30 }}>
                      {isVisible ? <CountUp end={allTimeBooking} /> : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h5>
              <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                <span className={toggle === true ? "text-black" : "text-white"}>
                  yearly
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
