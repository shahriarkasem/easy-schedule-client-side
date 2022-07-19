import React from "react";
import capterra from "../../../../media/images/review/capterra.png";
import financesOnline from "../../../../media/images/review/financesonline.png";
import google from "../../../../media/images/review/google-10to8-reviews.png";
import g2 from "../../../../media/images/review/g2-logo-for-website.png";
import fiveStars from "../../../../media/images/review/5-stars.png";
import fourHalfStars from "../../../../media/images/review/4-half-stars.png";

const Review = () => {
  return (
    <div className="my-10">
      <div className="md:mx-20 lg:mx-36">
        <h2 className='font-semibold md:text-2xl'>Appointment scheduling software trusted worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          <div className="flex flex-col items-center mt-6 md:mt-6">
            <img className='w-40 lg:w-48' src={capterra} alt=""></img>
            <img className="w-36 lg:w-40 mt-2" src={fourHalfStars} alt=""></img>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-6">
            <img className='w-40 lg:w-48 mt-1 lg:mt-2' src={financesOnline} alt=""></img>
            <img className="w-36 lg:w-40 mt-3 lg:mt-4" src={fourHalfStars} alt=""></img>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-6">
            <img className='w-32 lg:w-40' src={google} alt=""></img>
            <img className="w-36 lg:w-40 mt-2" src={fiveStars} alt=""></img>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-6">
            <img className='w-40 lg:w-48' src={g2} alt=""></img>
            <img className="w-36 lg:w-40 mt-2" src={fiveStars} alt=""></img>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Review;
