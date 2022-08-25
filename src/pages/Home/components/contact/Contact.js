import React from "react";

const Contact = () => {
  return (
    <div className="my-16 lg:px-40">
      <p className="text-center text-primary font-bold ">Contact</p>
      <h2 className="lg:text-4xl text-3xl text-neutral font-bold text-center lg:px-64 px-16">
        Let us handle your project, professionally.
      </h2>

      <form className="mt-16">
        <div className="flex gap-6 justify-center mb-4">
          <input
            type="text"
            placeholder="First Name"
            class="input input-bordered input-md w-full max-w-xs bg-gray-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input input-bordered input-md w-full max-w-xs bg-gray-200 "
          />
        </div>
        <div className="flex gap-6 justify-center mb-4">
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered input-md w-full max-w-xs bg-gray-200"
          />
          <input
            type="number"
            placeholder="Phone Number"
            class="input input-bordered input-md w-full max-w-xs bg-gray-200"
          />
        </div>
        <textarea
          class="textarea w-full max-w-2xl bg-gray-200 block mx-auto"
          rows="4"
          placeholder="Your Message"
        ></textarea>
        <input
          className="btn btn-primary text-white block mx-auto my-3"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
