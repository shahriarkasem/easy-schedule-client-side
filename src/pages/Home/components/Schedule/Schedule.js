import React from "react";

const Schedule = () => {
  return (
    <div className="my-12">
      <div className="md:mx-20 lg:mx-36">
        <div className="card lg:card-side bg-base-100 shadow-xl p-8">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-bold">
              Working 24/7 to fill <br /> your schedule!
            </h2>
            <p>
              With sequarespace scheduling, clients can quickly view your
              availability and book their own classes or appointments. They can
              even pay online and reschedule with a click. Never ask "what time
              works for you? again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
