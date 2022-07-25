import React from "react";

const Feature = ({ feature }) => {
  const { name, description, icon } = feature;
  return (
    <div className="card w-80 lg:w-96 md:w-96 bg-base-100 shadow-xl  ">
      <figure className="px-8 pt-10 flex justify-center">
        <img src={icon} alt="reminder icon" className="rounded-xl  w-16" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl px-5 font-semibold">{name}</h2>
        <p className="my-5 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
