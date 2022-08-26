import React from "react";

const ZoomSchedule = ({ schedule }) => {
  const { title, time, host } = schedule;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{time}</p>
        <h3>{host}</h3>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Join Zoom Meeting</button>
        </div>
      </div>
    </div>
  );
};

export default ZoomSchedule;
