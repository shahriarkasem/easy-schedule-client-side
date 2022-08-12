import React from "react";

const Feature = ({ feature, toggle }) => {
  const { name, description, icon } = feature;
  return (
    <div
      className={
        toggle === true
          ? "card w-80 lg:w-96 md:w-96 bg-base-100 shadow-xl"
          : "card w-80 lg:w-96 md:w-96 bg-slate-600 shadow-xl"
      }
    >
      <figure className="px-8 pt-10 flex justify-center">
        <img src={icon} alt="reminder icon" className="rounded-xl  w-16" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl px-5 font-semibold">
          <span className={toggle === true ? "text-black" : "text-white"}>
            {name}
          </span>
        </h2>
        <p className="my-5 text-gray-500">
          <span className={toggle === true ? "text-black" : "text-white"}>
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Feature;
