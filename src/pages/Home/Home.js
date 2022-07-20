import React from "react";
import Review from "./components/Review/Review";
import Booking from "./components/Booking/Booking";
import Integration from "./components/integration/Integration";
import Support from "./components/support/Support";
import Schedule from "./components/Schedule/Schedule";
import Meeting from "./components/Meeting/Meeting";

const Home = () => {
  return (
    <div>
      <h6>Hello from home.</h6>
      <h5>Checking github conflict</h5>
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
