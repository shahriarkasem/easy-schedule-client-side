import React, { useContext } from "react";
import "../ReviewCarousel/ReviewCarousel.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DarkContext from "../../../../DarkMode/DarkContext";

const ReviewCarousel = () => {
  const images = [
    {
      img: require("../../../../../media/images/review/google.png"),
      rating: 4.8,
    },
    {
      img: require("../../../../../media/images/review/meta.png"),
      rating: 4.5,
    },
    { img: require("../../../../../media/images/review/ph1.png"), rating: 5 },
    {
      img: require("../../../../../media/images/review/paypal.png"),
      rating: 4.8,
    },
    { img: require("../../../../../media/images/review/ms.png"), rating: 4.5 },
    {
      img: require("../../../../../media/images/review/sumsung.png"),
      rating: 5,
    },
    {
      img: require("../../../../../media/images/review/tesla.png"),
      rating: 4.4,
    },
    { img: require("../../../../../media/images/review/wu.png"), rating: 5 },
  ];
  const { toggle } = useContext(DarkContext);

  return (
    <div className="my-28">
      <div className="">
        <div
          className={
            toggle === true
              ? " text-black my-2 lg:my-20 md:my-6  mb-5 text-center"
              : "text-white my-2 lg:my-20 md:my-6  mb-5 text-center"
          }
        >
          <h2 className=" mb-5 font-bold lg:text-4xl text-2xl">
            Easy Schedule
          </h2>
          <h2 className=" lg:text-3xl text-2xl">trusted worldwide</h2>
        </div>

        <div className="review-container ">
          <div
            class={toggle === true ? "slider bg-white" : "slider bg-slate-100"}
          >
            <div class="slide-track ">
              {images.map((img) => (
                <div class="slide flex flex-col justify-center items-center ">
                  <img
                    class="mt-10 h-96"
                    src={img.img}
                    className=" lg:w-28 w-20"
                    alt=""
                  />
                  <div className="mt-2">
                    <Rating
                      initialRating={img.rating}
                      emptySymbol={<FontAwesomeIcon icon={faStar} />}
                      fullSymbol={
                        <FontAwesomeIcon
                          style={{ color: "goldenrod" }}
                          icon={faStar}
                        />
                      }
                      readonly
                    ></Rating>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
