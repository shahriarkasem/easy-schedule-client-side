import React from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Review></Review>

        </div>
    );
};

export default Home;