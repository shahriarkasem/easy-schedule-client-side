import React from "react";
import integration from "../../../../media/images/integration.png";

const Integration = () => {
  return (
    <section className="bg-[#F5F9FA] px-12 mt-6 py-24">
      <div className="lg:flex items-center lg:px-36 px-5">
        <div className="lg:ml-12">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="lg:text-4xl text-2xl font-bold mb-2 text-[#ef7841]"
          >
            With integrations that <br /> make your life easier
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Google Calendar, Outlook Calendar, Zoom, Microsoft Teams,
            Salesforce, Stripe, webhooks, custom Lambda functions, and many
            more.
          </p>
        </div>
        <div>
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mt-6 lg:mr-24"
            src={integration}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Integration;
