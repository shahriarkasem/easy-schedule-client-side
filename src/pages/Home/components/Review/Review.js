import React from "react";
import capterra from "../../../../media/images/review/capterra.png";
import financesOnline from "../../../../media/images/review/financesonline.png";
import google from "../../../../media/images/review/google-10to8-reviews.png";
import g2 from "../../../../media/images/review/g2-logo-for-website.png";
import fiveStars from "../../../../media/images/review/5-stars.png";
import fourHalfStars from "../../../../media/images/review/4-half-stars.png";
import ReviewCarousel from "./ReviewCarousel/ReviewCarousel";

const Review = () => {
  return (
    <div className="my-10">
      <div>
        <ReviewCarousel></ReviewCarousel>
      </div>
    </div>
  );
};

export default Review;
