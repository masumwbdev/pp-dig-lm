import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Comfort from '../Comfort/Comfort';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <HomeServices></HomeServices>
            <Comfort></Comfort>
        </div>
    );
};

export default Home;