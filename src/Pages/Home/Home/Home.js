import React from 'react';
import Banner from '../Banner/Banner';
// import Booking from '../Booking/Booking';
import Comfort from '../Comfort/Comfort';
import Covid from '../Covid/Covid';
import CovidTwo from '../CovidTwo/CovidTwo';
import Diseases from '../Diseases/Diseases';
import Hospital from '../Hospital/Hospital';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Booking></Booking> */}
            <Covid></Covid>
            <Diseases></Diseases>
            <CovidTwo></CovidTwo>
            <HomeServices></HomeServices>
            <Hospital></Hospital>
            <Comfort></Comfort>
        </div>
    );
};

export default Home;