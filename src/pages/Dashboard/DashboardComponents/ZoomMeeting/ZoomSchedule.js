import React from "react";

const ZoomSchedule = ({ schedule }) => {
  const { title, time, host, zoom } = schedule;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-1xl font-bold">{title}</h2>
        <p>{time}</p>
        <h3>{host}</h3>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">
            <a target="_blank" href={zoom}>
              Join Zoom Meeting
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomSchedule;
