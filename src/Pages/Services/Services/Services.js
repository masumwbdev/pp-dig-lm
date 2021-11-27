import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-3">
            <h1>Services Lorem</h1>
            <hr className="w-25 mx-auto" />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-3">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;