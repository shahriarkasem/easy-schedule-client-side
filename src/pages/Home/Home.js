import React from "react";

import Booking from "./components/Booking/Booking";
import Carousel from "./components/Carousel/Carousel";
import Review from "./components/Review/Review";
import Integration from "./components/integration/Integration";
import Support from "./components/support/Support";

const Home = () => {
  return (
    <div>
      <h6>Hello from home.</h6>
      <h5>Checking github conflict</h5>
      <Carousel />
      <Integration />
      <Support />
      <Review></Review>
      <Booking></Booking>
    </div>
  );
};
export default Home;
