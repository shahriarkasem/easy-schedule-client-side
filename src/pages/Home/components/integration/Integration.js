import React from "react";
import integration from "../../../../media/images/integration.png";

const Integration = () => {
  return (
    <section className="bg-[#F5F9FA] p-5 my-6">
      <div className="lg:flex items-center lg:px-36 px-5">
        <div>
          <h2 className="text-4xl font-semibold mb-2">
            With integrations that <br /> make your life easier
          </h2>
          <p>
            Google Calendar, Outlook Calendar, Zoom, Microsoft Teams,
            Salesforce, Stripe, webhooks, custom Lambda functions, and many
            more.
          </p>
        </div>
        <div>
          <img className="mt-6" src={integration} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Integration;
