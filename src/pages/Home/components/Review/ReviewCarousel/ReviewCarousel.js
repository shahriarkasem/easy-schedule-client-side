import React from "react";
import "../ReviewCarousel/ReviewCarousel.css";
import capterra from "../../../../../media/images/review/capterra.png";
import financesOnline from "../../../../../media/images/review/financesonline.png";
import g2 from "../../../../../media/images/review/g2-logo-for-website.png";
import twitter from "../../../../../media/images/review/Twitter-logo-royalty-free-PNG.png";
import apple from "../../../../../media/images/review/download.png";
import samsung from "../../../../../media/images/review/samsung.jpg";
import tesla from "../../../../../media/images/review/Font-Tesla-logo.jpg";
import google from "../../../../../media/images/review/google-10to8-reviews.png";
import invision from "../../../../../media/images/review/2.png";
import fiveStars from "../../../../../media/images/review/5-stars.png";
import fourHalfStars from "../../../../../media/images/review/4-half-stars.png";

const ReviewCarousel = () => {
  return (
    <div>
        <h2 className="text-center font-semibold my-2 md:my-4 text-4xl">Appointment scheduling software trusted worldwide</h2>
      <div class="slider">
        <div class="slide-track">
          <div class="slide flex flex-col justify-center items-center  ml-10">
            <img class="mt-10"
              src={capterra}
              height="100"
              width="250"
              alt=""
            />
            <img className="mt-15 ml-9"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide ml-10">
            <img  className="ml-10 mt-8"
              src={financesOnline}
              height="100"
              width="250"
              alt=""
            />
            <img className="ml-16 mt-1"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide felx flex-col justify-center ml-10">
            <img className="ml-14 mt-6"
              src={g2}
              height="100"
              width="200"
              alt=""
            />
            <img className="ml-16 mt-[-5px]"
              src={fourHalfStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide ml-10">
            <img class="mt-8 ml-24"
              src={twitter}
              height="100"
              width="50"
              alt=""
            />
            <img className="ml-4"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide ml-10">
            <img className="mt-4 ml-10"
              src={apple}
              height="100"
              width="130"
              alt=""
            />
            <img className="mt-[-12px]"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide ml-10">
            <img className="mt-4 ml-6"
              src={samsung}
              height="100"
              width="150"
              alt=""
            />
            <img className="mt-[-24px]"
              src={fourHalfStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide">
            <img className="mt-[-5px]"
              src={tesla}
              height="100"
              width="200"
              alt=""
            />
            <img className="mt-[-34px] ml-1"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide ml-10">
            <img className="mt-8 ml-6"
              src={google}
              height="100"
              width="150"
              alt=""
            />
            <img className="mt-[-8px]"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide">
            <img className=""
              src={invision}
              height="100"
              width="250"
              alt=""
            />
            <img className="mt-[-20px] ml-8"
              src={fourHalfStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide flex flex-col justify-center items-center  ml-10">
            <img class="mt-10"
              src={capterra}
              height="100"
              width="250"
              alt=""
            />
            <img className="mt-15 ml-9"
              src={fiveStars}
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
