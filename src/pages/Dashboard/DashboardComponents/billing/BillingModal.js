import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import credit from "../../../../media/images/credit.png";
import paypal from "../../../../media/images/paypal.png";
import ssl from "../../../../media/images/ssl.png";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1A7TFEhAtE4KXiNYmOinDpEnKlgcnyZHHmSpoFJUjXRhSJMvna9Wo9TGwjjJVIuqlUpDExP5OzMuJDAdTnubzT00EZv5zayw"
);

const BillingModal = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("$");

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected === "Yearly") {
      setAmount(amount * 12);
    } else {
      setAmount(10);
    }
  };

  const handleCurChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-center">Upgrade to Premium</h3>
          <p className="text-center text-gray-500">For Individuals</p>
          <p class="py-4">
            <div className="flex justify-center items-center lg:gap-5 gap-2">
              {/* <h3 className=" ">Billed</h3> */}
              <div class="form-control w-36  max-w-xs">
                <select onChange={handleChange} class="select select-bordered">
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <h3 className=""> in</h3>
              <div class="form-control w-36 max-w-xs">
                <select
                  onChange={handleCurChange}
                  class="select select-bordered"
                >
                  <option>$ </option>
                  <option>৳</option>
                </select>
              </div>
              <small>USD/BDT</small>
            </div>
            <h3 className="text-center font-semibold my-5">
              Total Amount: {currency} {amount}{" "}
            </h3>
          </p>
          <p className="text-center font-semibold mb-5">Select Payment Type</p>

          {/* stripe */}
          <div class="collapse rounded-2xl mb-4">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="flex items-center gap-2">
                <img className="w-7" src={credit} alt="" />
                Credit Card
              </p>
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount} />
              </Elements>
            </div>
          </div>
          {/* paypal */}
          <div class="collapse rounded-2xl mb-4">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="flex items-center gap-2">
                <img className="w-7" src={paypal} alt="" />
                PayPal
              </p>
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Upcoming...
            </div>
          </div>
          {/* SSl */}
          <div class="collapse rounded-2xl mb-4">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="flex items-center gap-2">
                <img className="w-7" src={ssl} alt="" />
                SSLCommerz
              </p>
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Upcoming...
            </div>
          </div>
          <div class="modal-action">
            {/* <label class="btn button-orange rounded-3xl px-10">Upgrade</label> */}
            <label
              for="my-modal-6"
              class="btn  btn-outline btn-accent rounded-3xl px-10 "
            >
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
