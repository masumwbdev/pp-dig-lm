import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Booking></Booking>
        </div>
    );
};

export default Home;