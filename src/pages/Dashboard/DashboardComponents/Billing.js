import React from "react";

const Billing = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-2xl mt-12 mb-12">Billing</h2>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-5">Want to upgrade your account</h2>
        <p className="mb-4">You are currently enjoying the Teams trial</p>
        <p>On 31 August 2022 you'll be downgraded to the free plan</p>

        <h2 className="text-lg font-bold mt-16">
          Choose the right subscription for your team
        </h2>
        <small>You are currently enjoying teems trial</small>
      </div>
    </div>
  );
};

export default Billing;
