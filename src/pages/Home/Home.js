import React from "react";

import Booking from "./components/Booking/Booking";
import Carousel from "./components/Carousel/Carousel";
import Review from "./components/Review/Review";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Review></Review>
      <Booking></Booking>
   
    </div>
  );
};

export default Home;
