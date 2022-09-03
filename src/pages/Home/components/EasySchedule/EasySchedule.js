import {
  faArrowRightArrowLeft,
  faBoxArchive,
  faCartFlatbedSuitcase,
  faCircleRadiation,
  faCreditCard,
  faHeadset,
  faBusinessTime,
  faShippingFast,
  faStar,
  faTentArrowTurnLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import DarkContext from "../../../DarkMode/DarkContext";

const EasySchedule = () => {
  const { toggle, setToggle } = useContext(DarkContext);

  return (
    <div>
      <div
        className={
          toggle === true
            ? "p-5 lg:px-12 mt-10 bg-[#F88148]"
            : "p-5 lg:px-12 mt-10 bg-slate-700"
        }
      >
        <div
          className={
            toggle === true
              ? "flex justify-center "
              : "flex justify-center  bg-slate-700"
          }
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="flex sm:border-0 md:border-0 lg:border-r-2"
            >
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#fff" }}
                  icon={faBusinessTime}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">
                  <span className="text-white">Easy Scheduling</span>
                </h3>
                <p className=" font-sans  ">
                  <span className="text-white">For any users</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="flex sm:border-0 md:border-0 lg:border-r-2"
            >
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#fff" }}
                  icon={faArrowRightArrowLeft}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">
                  <span className="text-white">Notify user</span>
                </h3>
                <p className=" font-sans  ">
                  <span className="text-white">Before staring meeting</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="flex  sm:border-0 md:border-0 lg:border-r-2"
            >
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon style={{ color: "#fff" }} icon={faHeadset} />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">
                  <span className="text-white">Call us anytime</span>
                </h3>
                <p className=" font-sans  ">
                  <span className="text-white">Call us anytime</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="flex "
            >
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#fff" }}
                  icon={faCreditCard}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">
                  <span className="text-white">100% Safety</span>
                </h3>
                <p className=" font-sans  ">
                  <span className="text-white">Only secure payments</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySchedule;
