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
    <div className={(toggle === true ? 'p-5 lg:px-12 mt-10 bg-white' : 
    'p-5 lg:px-12 mt-10 bg-slate-700')}>
      <div className={(toggle === true ? 'flex justify-center border p-2 bg-white' : 'flex justify-center border p-2 bg-slate-700')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex sm:border-0 md:border-0 lg:border-r-2"
          >
            <p className="  lg:text-4xl">
              {" "}
              <FontAwesomeIcon
                style={{ color: "#F88148" }}
                icon={faBusinessTime}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" lg:font-bold uppercase"><span className={(toggle === true ? 'text-black' : 'text-white')}>Easy Scheduling</span></h3>
              <p className=" font-sans  "><span className={(toggle === true ? 'text-black' : 'text-white')}>For any users</span></p>
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
                style={{ color: "#F88148" }}
                icon={faArrowRightArrowLeft}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" lg:font-bold uppercase"><span className={(toggle === true ? 'text-black' : 'text-white')}>Notify user</span></h3>
              <p className=" font-sans  "><span className={(toggle === true ? 'text-black' : 'text-white')}>Before staring meeting</span></p>
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
              <FontAwesomeIcon style={{ color: "#F88148" }} icon={faHeadset} />
            </p>
            <div className="text-left px-4">
              <h3 className=" lg:font-bold uppercase"><span className={(toggle === true ? 'text-black' : 'text-white')}>Call us anytime</span></h3>
              <p className=" font-sans  "><span className={(toggle === true ? 'text-black' : 'text-white')}>Call us anytime</span></p>
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
                style={{ color: "#F88148" }}
                icon={faCreditCard}
              />
            </p>
            <div className="text-left px-4">
              <h3 className=" lg:font-bold uppercase"><span className={(toggle === true ? 'text-black' : 'text-white')}>100% Safety</span></h3>
              <p className=" font-sans  "><span className={(toggle === true ? 'text-black' : 'text-white')}>Only secure payments</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySchedule;
