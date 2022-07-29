import React from "react";
import "./Pricing.css";
import bg from "../../media/images/pricing/bg.svg";
import bg1 from "../../media/images/pricing/bg1.png";
import bg2 from "../../media/images/pricing/bg2.png";
import icon from "../../media/images/pricing/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Home/components/Navbar/Navbar";

const Pricing = () => {
  return (
    <div className="min-h-screen px-5">
      <Navbar />
      <div className="-mx-5 blog-bg-2  p-20 mb-5 pb-40 flex justify-center items-center">
        <div class="">
          <h2 className=" text-gray-800 lg:text-6xl  text-3xl  font-bold">
            Supercharged scheduling
          </h2>
          <p className="mt-10 text-center">
            Simple pricing based on the number of calendars you use. Start for
            free.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-28 px-0">
        <div className="border-2 border-red-500 lg:p-10 p-5 rounded-lg">
          <h2 className="text-center text-2xl pb-5">Paid plan</h2>
          <div
            className="
          flex justify-center "
          >
            <p className=" text-4xl">$</p>
            <p className=" text-8xl font-bold">10</p>
          </div>
          <h3 className="text-center py-5 text-xl">per calendar / month</h3>
          <div className="flex justify-center items-center lg:gap-5 gap-2">
            <h3 className=" ">Billed</h3>
            <div class="form-control w-36  max-w-xs">
              <select class="select select-bordered">
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <h3 className=""> in</h3>
            <div class="form-control w-36 max-w-xs">
              <select class="select select-bordered">
                <option>$ USD</option>
                <option>$ EUR</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4 pt-10">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Unlock all our supercharged features</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Powerful automation and custom notifications</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Responsive account management and support</h3>
          </div>
          <div className="flex justify-center w-full py-7">
            {" "}
            <button className="btn  button-orange ">
              Get started from free
            </button>
          </div>

          <h3 className="text-center text-gray-400">
            No credit card required. Cancel anytime.
          </h3>
        </div>
        <div className="border-2 border-red-500 lg:p-10 p-5 rounded-lg">
          <h2 className="text-center text-2xl pb-5">Free forever</h2>
          <div
            className="
          flex justify-center "
          >
            <p className=" text-4xl">$</p>
            <p className=" text-8xl font-bold">0</p>
          </div>

          <div className="flex justify-start items-center gap-5 pb-4 pt-10">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>Basic scheduling features and functionality</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>1 linked calendar from your Google or Microsoft account</h3>
          </div>
          <div className="flex justify-start items-center gap-5 pb-4">
            <FontAwesomeIcon
              style={{ color: "#F88148" }}
              icon={faCheckCircle}
            />
            <h3>1 personalized booking page</h3>
          </div>
          <div className="flex justify-center w-full py-7">
            {" "}
            <button className="btn  button-orange ">
              Get started from free
            </button>
          </div>

          <h3 className="text-center text-gray-400">
            Everyone starts with a free 14 day trial of the paid plan.
          </h3>
        </div>
      </div>
      <div className="mt-20 ">
        <h2 className="text-center text-4xl mb-10">
          Frequently asked questions
        </h2>
        <div className="grid  lg:grid-cols-3 grid-cols-1  lg:gap-16 gap-8 lg:px-20 ">
          <div>
            <h3 className="text-xl mb-5">What happens when I sign up?</h3>
            <p className="  text-gray-500">
              You need a calendar account (like Google or Microsoft) to
              integrate with your booking page. You don't need payment details
              to get going — trial all features for 14-days, then upgrade or use
              the free-forever version.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">
              What payment methods do you accept?
            </h3>
            <p className="  text-gray-500">
              We accept all major credit and debit cards, including Visa,
              MasterCard and American Express. Please note we will only accept
              checks or bank transfers for large accounts and by prior
              agreement.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">
              Are you going to charge me tax on top?
            </h3>
            <p className="  text-gray-500">
              If you're based in the UK, or EU and don't have a VAT number, we
              will add GB VAT (20%) to your subscription cost. EU users with a
              valid VAT number and users from the rest of the world will not be
              charged additional tax.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">
              What's the deal with the free plan?
            </h3>
            <p className="  text-gray-500">
              With our free-forever plan, you get a powerful booking page with
              all the basic features we know you need. All we ask is that your
              booking page and notification emails carry our 'Powered for free'
              button.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">
              What happens if I need more than one calendar?
            </h3>
            <p className="  text-gray-500">
              Our pricing is set to $10 per calendar, per month. So if you need
              2, it would be $20 per month and so on. If you change the number
              of calendars mid way through the month, you will be asked to check
              out again on the new plan, or confirm the downgrade, whatever you
              want to do.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">
              Do you charge on a monthly basis? Can I pause the account?
            </h3>
            <p className="  text-gray-500">
              When your account is up and running we will automatically charge
              your card every month. You can pause your subscription at any
              time, in which case the free version of the account will keep
              going as long as you don't use any of the upgraded features.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">What kind of support do you offer?</h3>
            <p className="  text-gray-500">
              Users on our Paid plan will receive unlimited priority support
              from our customer success team. Paid plan users can also sign up
              to a number of webinars hosted by the team. Users on our free plan
              have access to our comprehensive knowledge base only.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">Are my details secure?</h3>
            <p className="  text-gray-500">
              All payment data is processed and handled by Stripe who offer the
              most stringent levels of security in the payments industry. Your
              data is always encrypted and 100% secure. YouCanBook.me does not
              keep or store any credit card information.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-5">What happens if I change my mind?</h3>
            <p className="  text-gray-500">
              No worries! We have a 30 day money back guarantee if you change
              your mind after signing up for a Paid plan.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-bg-1 -mx-5 flex justify-center pb-10">
        <div className="mt-10 px-2">
          <h3 className="text-center text-3xl font-bold p-5">
            Getting started is fast and easy
          </h3>
          <p>
            Get started with a FREE 14 day trial of our paid plan to test out
            all the features.
          </p>
          <div className="flex justify-center py-5">
            <button className="btn button-orange ">Get started for FREE</button>
          </div>
          <p className="text-center text-gray-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
