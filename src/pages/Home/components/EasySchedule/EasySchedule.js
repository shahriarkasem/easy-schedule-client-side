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
import React from "react";

const EasySchedule = () => {
  return (
    <div>
      {/* <div class="flex flex-col w-full border-opacity-50">
        <div class="divider"></div>
      </div> */}
      <div className=" p-5  lg:px-12 ">
        <div className="flex justify-center border p-2  ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            <div className="flex sm:border-0 md:border-0 lg:border-r-2">
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#F88148" }}
                  icon={faBusinessTime}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">Easy Scheduling</h3>
                <p className=" font-sans  ">For any users</p>
              </div>
            </div>
            <div className="flex sm:border-0 md:border-0 lg:border-r-2">
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#F88148" }}
                  icon={faArrowRightArrowLeft}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">Notify user</h3>
                <p className=" font-sans  ">Before staring meeting</p>
              </div>
            </div>
            <div className="flex  sm:border-0 md:border-0 lg:border-r-2">
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#F88148" }}
                  icon={faHeadset}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">Call us anytime</h3>
                <p className=" font-sans  ">Call us anytime</p>
              </div>
            </div>
            <div className="flex ">
              <p className="  lg:text-4xl">
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#F88148" }}
                  icon={faCreditCard}
                />
              </p>
              <div className="text-left px-4">
                <h3 className=" lg:font-bold uppercase">100% Safety</h3>
                <p className=" font-sans  ">Only secure payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySchedule;
