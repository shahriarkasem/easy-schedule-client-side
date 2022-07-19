import React from 'react';
import Review from './components/Review/Review';
import Booking from "./components/Booking/Booking";
import Integration from "./components/integration/Integration";
import PowerfulFeatures from './components/PowerfulFeatures/PowerfulFeatures';

const Home = () => {
    return (
        <div>
            <h6>Hello from home.</h6>
            <h5>Testing merge</h5>
            <Integration />
            <Review></Review>
            <Booking></Booking>
            <PowerfulFeatures></PowerfulFeatures>
        </div>
    );
};

export default Home;
