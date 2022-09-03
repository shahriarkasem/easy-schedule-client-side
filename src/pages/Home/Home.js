import React, { useContext } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Review from "./components/Review/Review";
import Booking from "./components/Booking/Booking";
import Carousel from "./components/Carousel/Carousel";

import Integration from "./components/integration/Integration";
import PowerfulFeatures from "./components/PowerfulFeatures/PowerfulFeatures";
import ReadySignup from "./components/ReadySignup/ReadySignup";
import Support from "./components/support/Support";
import Schedule from "./components/Schedule/Schedule";
import Meeting from "./components/Meeting/Meeting";
import EasySchedule from "./components/EasySchedule/EasySchedule";
import Footer from "./components/Footer/Footer";
import DarkContext from "../DarkMode/DarkContext";
import Contact from "./components/contact/Contact";

const Home = () => {
  const { toggle } = useContext(DarkContext);

  return (
    <div className={toggle === true ? "bg-white" : "bg-slate-700"}>
      <Navbar />
      <Banner></Banner>
      <EasySchedule />
      <Carousel />
      <Integration />
      <Support />
      <Schedule></Schedule>
      <Meeting></Meeting>
      <PowerfulFeatures></PowerfulFeatures>
      <Review></Review>
      <Booking></Booking>

      <div className="pb-10">
        <ReadySignup></ReadySignup>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
