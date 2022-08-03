import React from "react";
import img1 from "../../media/images/Individuals/img1.webp";
const Individuals = () => {
  return (
    <div className="min-h-screen ">
      {/* top banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-12  mt-8">
        <div className="mt-10  ml-20">
          <h2 className="text-4xl font-bold pb-6 ">
            The genius way to <br /> work <span>better</span>
          </h2>
          <p className="text-2xl leading-normal  font-sans pb-10 w-full ">
            Calendly makes it easy to work smarter when you are working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <div>
            <button class="btn button-orange text-white rounded-full">
              {" "}
              Sign up for free
            </button>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Individuals;
