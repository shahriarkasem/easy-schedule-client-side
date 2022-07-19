import React from 'react';
import Booking from './components/Booking/Booking';
import Review from './components/Review/Review';

const Home = () => {
    return (
        <div>
            <h6>Hello from home.</h6>
            <Review></Review>
            <Booking></Booking>
        </div>
    );
};

export default Home;