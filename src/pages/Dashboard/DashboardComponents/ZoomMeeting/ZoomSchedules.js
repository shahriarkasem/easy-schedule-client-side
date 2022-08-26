import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ZoomSchedule from "./ZoomSchedule";

const ZoomSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  /* arif */
  useEffect(() => {
    fetch("https://easyscheduler24.herokuapp.com/schedule")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);
  return (
    <div>
      <h4 className="text-2xl font-bold text-orange-500 text-center">
        Available Schedules
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {schedules.map((schedule) => (
          <ZoomSchedule key={schedule._id} schedule={schedule}></ZoomSchedule>
        ))}
      </div>
    </div>
  );
};

export default ZoomSchedules;
