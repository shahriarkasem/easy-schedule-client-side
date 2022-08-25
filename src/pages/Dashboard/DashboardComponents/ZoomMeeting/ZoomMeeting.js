import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const ZoomMeeting = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen bg-teal-100 my-8">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            {/* <h3 className="text-3xl font-bold">Want to make a Zoom Meeting?</h3> */}
            <button class="btn btn-warning text-center">
              Join Zoom Meeting
            </button>
          </div>
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>
              You have selected:{" "}
              <span className="text-orange-500"> {format(date, "PP")}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomMeeting;
