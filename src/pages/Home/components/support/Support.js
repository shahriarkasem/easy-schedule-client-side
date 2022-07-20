import React from "react";
import support from "../../../../media/images/support-bg.jpg";

const Support = () => {
  return (
    <div className="my-12">
      <div
        style={{
          background: `url(${support})`,
        }}
        className="p-32"
      >
        <h3 className="text-3xl font-bold text-white text-center">
          We've got your back — every step of the way.
        </h3>
        <p className="text-white text-center">
          Because you shouldn't have to figure it out on your own.
        </p>

        <div className="lg:mt-[-210px] flex justify-center">
          <div class="w-96 bg-base-100 shadow-xl rounded-3xl">
            <div class="px-10 rounded-2xl">
              <p className="font-bold">
                Have questions? Give us a call and we'll walk you through it.
              </p>
              <p> +1 855-825-7388</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-28 mt-[-50px]">
        <div className="grid lg:grid-cols-3 justify-items-center">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-bold text-center">
                24/7 Customer Support
              </h2>
              <p>
                HubSpot's award-winning customer support team is ready to help
                you with all your technical questions, and can be reached by
                live chat, email, or phone depending on your plan.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-bold text-center">Services</h2>
              <p>
                Get up and running quickly with a personalized onboarding plan.
                Then maximize results along the way with premium training,
                ongoing consulting, and technical services.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-bold text-center">Education</h2>
              <p>
                From blog articles to online courses to comprehensive
                certifications, HubSpot offers no shortage of free educational
                content to help your whole team stay ahead of the curve as you
                grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
