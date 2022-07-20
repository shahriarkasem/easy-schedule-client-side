import React from "react";
import Review from "./components/Review/Review";
import Booking from "./components/Booking/Booking";
import Integration from "./components/integration/Integration";
import Support from "./components/support/Support";

const Home = () => {
  return (
    <div>
      <h6>Hello from home.</h6>
      <h5>Checking github conflict</h5>
      <Integration />
      <Support />
      <Review></Review>
      <Booking></Booking>
    </div>
  );
};
export default Home;
