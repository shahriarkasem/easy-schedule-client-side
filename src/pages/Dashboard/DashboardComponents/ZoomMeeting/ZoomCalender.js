import React from "react";
import "./ZoomCalender.css";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
import meetingImg from "../../../../media/images/Individuals/meetingImg.gif";

const ZoomCalender = () => {
  const [date, setDate] = useState(new Date());
  const { register, handleSubmit, reset, reload } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    /*  axios({
      method: "POST",
      headers: {
        // authorization
      },
      url: `http://localhost:3000/event/create/group`,
      data: data,
    }) */

    axios.post("http://localhost:3000/addSchedule", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("added successfully");
        reload();
        reset();
      }
    });
  };
  /* 
  min-h-screen bg-teal-100 my-8
  
            <p>
              You have selected:{" "}
              <span className="text-orange-500"> {format(date, "PP")}</span>{" "}
            </p>*/
  return (
    <div>
      <h3 className="text-2xl font-bold text-orange-500">
        Want to make a Zoom Meeting?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-10  min-h-screen bg-teal-100 my-8">
        <div>
          <img className="" src={meetingImg} alt="" />
        </div>
        <div>
          <div className="add-service mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="title"
              />
              <input
                {...register("time", { required: true })}
                type="time"
                placeholder=""
              />
              <input
                {...register("host", { required: true })}
                placeholder="host name"
              />
              <input {...register("zoom")} placeholder="zoom link" />
              <input className="bg-orange-700 text-white" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomCalender;
