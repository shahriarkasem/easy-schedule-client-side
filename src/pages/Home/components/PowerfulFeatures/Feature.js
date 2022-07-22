import React from "react";

const Feature = ({ feature }) => {
  const { name, description, icon } = feature;
  return (
    <div className="card w-80 md:w-60 bg-base-100 shadow-xl hover:bg-my-orange hover:text-my-default">
      <figure className="px-10 pt-10 flex justify-center">
        <img
          src={icon}
          alt="reminder icon"
          className="rounded-xl md:w-8 w-10"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-lg md:text-sm font-bold px-5 text-[#13d58b]">
          {name}
        </h2>
        <p className="my-5 md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
