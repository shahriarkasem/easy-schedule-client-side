import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ZoomSchedule from "./ZoomSchedule";

const ZoomSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  const mySchedule = [
    {
      id: 1,
      title: "Morning Meeting",
      time: "09:30AM - 11:00AM ",
      host: "John Akbar",
    },
    {
      id: 2,
      title: "Afternoon Meeting",
      time: "03:30AM - 05:00pM ",
      host: "Tony Stark",
    },
    {
      id: 3,
      title: "Final Meeting",
      time: "08:30PM - 10:00PM ",
      host: "Abrar Sohan",
    },
    {
      id: 4,
      title: "Error Solving",
      time: "09:30AM - 10:00PM ",
      host: "Lokey Martin",
    },
    {
      id: 5,
      title: "Instant Meeting",
      time: "09:30AM - 06:00PM ",
      host: "Karim Jahan",
    },
  ];

  useEffect(() => {
    fetch("/schedule.json")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-center">Available Schedules</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {schedules.map((schedule) => (
          <ZoomSchedule key={schedule._id} schedule={schedule}></ZoomSchedule>
        ))}
      </div>
    </div>
  );
};

export default ZoomSchedules;
