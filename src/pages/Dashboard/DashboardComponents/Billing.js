import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Billing = () => {
  return (
    <div className="">
      <h2 className="text-2xl mt-12 mb-12">Billing</h2>
      {/* <div className="text-center mb-8">
        <h2 className="text-lg font-bold mt-16">
          Choose the right subscription for your team
        </h2>
        <small>You are currently enjoying teems trial</small>
      </div> */}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-0 mb-10">
        <div className="border-2 border-red-500 lg:p-10 p-5 rounded-lg">
          <h2 className="text-center text-2xl pb-5">For Individuals</h2>
          <div
            className="
          flex justify-center "
          >
            <p className=" text-4xl">$</p>
            <p className=" text-8xl font-bold">10</p>
          </div>
          <h3 className="text-center py-5 text-xl">per calendar / month</h3>
          <div className="flex justify-center items-center lg:gap-5 gap-2">
            <h3 className=" ">Billed</h3>
            <div class="form-control w-36  max-w-xs">
              <select class="select select-bordered">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <h3 className=""> in</h3>
            <div class="form-control w-36 max-w-xs">
              <select class="select select-bordered">
                <option>$ USD</option>
                <option>৳ BDT</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4 pt-10">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Create unlimited event types (one-on-one and group events)</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Customize email notifications and reminders</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Responsive account management and support</h3>
          </div>
          <div className="flex justify-center w-full py-7">
            {" "}
            <button className="btn button-orange rounded-3xl px-16">
              Select
            </button>
          </div>

          <h3 className="text-center text-gray-400">
            Stripe, SSLCOMMERZ and PayPal payment method are available.
          </h3>
        </div>

        {/* teams */}

        <div className="border-2 border-red-500 lg:p-10 p-5 rounded-lg">
          <h2 className="text-center text-2xl pb-5">For Teams</h2>
          <div
            className="
          flex justify-center "
          >
            <p className=" text-4xl">$</p>
            <p className=" text-8xl font-bold">12</p>
          </div>

          <h3 className="text-center py-5 text-xl">per calendar / month</h3>
          <div className="flex justify-center items-center lg:gap-5 gap-2">
            <h3 className=" ">Billed</h3>
            <div class="form-control w-36  max-w-xs">
              <select class="select select-bordered">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <h3 className=""> in</h3>
            <div class="form-control w-36 max-w-xs">
              <select class="select select-bordered">
                <option>$ USD</option>
                <option>৳ BDT</option>
              </select>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 pb-4 pt-10">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>
              Create unlimited event types (one-on-one, group, collective, and
              round robin)
            </h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Manage event types as an admin</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Live chat support</h3>
          </div>
          <div className="flex justify-center w-full py-7">
            {" "}
            <button className="btn button-orange rounded-3xl px-16">
              Select
            </button>
          </div>

          <h3 className="text-center text-gray-400">
            Stripe, SSLCOMMERZ and PayPal payment method are available.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Billing;
