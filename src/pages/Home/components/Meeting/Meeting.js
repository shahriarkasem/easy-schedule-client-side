import React, { useContext } from "react";
import meet2 from "../../../../media/images/meet-1.jpg";
import meet3 from "../../../../media/images/meet-2.jpg";
import meet1 from "../../../../media/images/meet-3.jpg";
import DarkContext from "../../../DarkMode/DarkContext";

const Meeting = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <div className="my-12">
      <div className="text-center">
        <h1
          className={
            toggle === true
              ? "text-black text-4xl font-bold"
              : "text-white text-4xl font-bold"
          }
        >
          Simplicity Meets Power
        </h1>
        <p className="my-4">
          <span className={toggle === true ? "text-gray-600" : "text-white"}>
            Tools that take the hassle out of online <br /> scheduling, booking
            and payments.
          </span>
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className={
          toggle === true
            ? "bg-base-100 shadow-xl p-8 md:mx-20 lg:mx-36 rounded"
            : "bg-slate-600 shadow-xl p-8 md:mx-20 lg:mx-36 rounded"
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-5">
          <div className="card w-80">
            <div className="card-body">
              <figure>
                <img src={meet1} alt="Shoes" />
              </figure>
              <h2 className="card-title text-[#ef7841]">
                Promote your availability.
              </h2>
              <p className={toggle === true ? "text-gray-600" : "text-white"}>
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
          <div className="card w-80">
            <div className="card-body">
              <figure>
                <img src={meet2} alt="Shoes" />
              </figure>
              <h2 className="card-title text-[#ef7841]">Stay organized.</h2>
              <p className={toggle === true ? "text-gray-600" : "text-white"}>
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
          <div className="card w-80">
            <div className="card-body">
              <figure>
                <img src={meet3} alt="Shoes" />
              </figure>
              <h2 className="card-title text-[#ef7841]">Save time.</h2>
              <p className={toggle === true ? "text-gray-600" : "text-white"}>
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
