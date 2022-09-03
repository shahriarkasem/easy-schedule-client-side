import React, { useContext } from "react";
import DarkContext from "../../../DarkMode/DarkContext";

const Contact = () => {
  const { toggle } = useContext(DarkContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-16 ">
      <div className="text-center  ">
        <p
          className={
            toggle === true ? "text-4xl text-black " : "text-4xl text-white"
          }
        >
          Contact
        </p>{" "}
        <div className="flex justify-center">
          <p class={toggle === true ? 'divider  w-44': 'divider bg-secondary w-44'}></p>
        </div>
      </div>
      <h2
        className={
          toggle === true
            ? "text-[18px]  text-center lg:px-64 px-16 text-black "
            : "text-[18px]  text-center lg:px-64 px-16 text-white"
        }
      >
        Have questions? Drop us an mail
      </h2>

      <form className="mt-10">
        <div className="flex gap-6 justify-center mb-4">
          <input
            type="text"
            placeholder="First Name"
            class="input input-bordered input-md w-full max-w-xs bg-gray-50 "
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input input-bordered input-md w-full max-w-xs bg-gray-50 "
          />
        </div>
        <div className="flex gap-6 justify-center mb-4">
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered input-md w-full max-w-xs bg-gray-50"
          />
          <input
            type="number"
            placeholder="Phone Number"
            class="input input-bordered input-md w-full max-w-xs bg-gray-50"
          />
        </div>
        <textarea
          class="textarea w-full max-w-2xl bg-gray-100 block mx-auto"
          rows="4"
          placeholder="Your Message"
        ></textarea>
        <input
          onSubmit={handleSubmit}
          className="btn button-orange text-white block mx-auto my-3"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
