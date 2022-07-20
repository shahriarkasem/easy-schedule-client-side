import React from "react";

import Booking from "./components/Booking/Booking";
import Carousel from "./components/Carousel/Carousel";
import Review from "./components/Review/Review";
import Integration from "./components/integration/Integration";
import Support from "./components/support/Support";
import Schedule from "./components/Schedule/Schedule";
import Meeting from "./components/Meeting/Meeting";

const Home = () => {
  return (
    <div>
      <h6>Hello from home.</h6>
      <h5>Checking github conflict</h5>
      <Carousel />
      <Integration />
      <Support />
      <Schedule></Schedule>
      <Meeting></Meeting>
      <Review></Review>
      <Booking></Booking>
    </div>
  );
};
export default Home;
