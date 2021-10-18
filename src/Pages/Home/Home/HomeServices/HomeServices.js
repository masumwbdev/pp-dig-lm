import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [homeser, SetHomeser] = useState([]);
    useEffect(() => {
        fetch('homeServices.json')
            .then(res => res.json())
            .then(data => SetHomeser(data))
    })
    return (
        <div>
            <div className="text-center mt-5">
                <h1>Services & More</h1>
                <p>After inauguration in the year 1993 COMFORT started to take a lead in providing advanced health care services. The professional standard <br /> and the expertise on health care facilities are the</p>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto g-4">
                {
                    homeser.map(homeservice => <HomeService
                        homeservice={homeservice}
                    ></HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;