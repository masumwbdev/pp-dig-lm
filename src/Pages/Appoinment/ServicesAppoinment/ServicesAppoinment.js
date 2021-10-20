import React from 'react';
import { useParams } from 'react-router';
import service from '../../../data/services.json'

const ServicesAppoinment = () => {
    const { serviceId } = useParams();
    const services = service.find(item => item.id === parseInt(serviceId));
    const { name, imgURL, price, description, comments } = services;
    return (
        <div className="w-100">
            <div className="p-5">
                <div className="p-4">
                    <img className="img-fluid" src={imgURL} alt="" />
                </div>
                <div className="p-4 w-75">
                    <span className=" text-warning fs-6"><i class="fas fa-comments mb-3"></i> {comments} comments</span>
                    
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <h5 className="text-danger mb-3">$ {price}</h5>
                    <button className="btn btn-sm btn-danger">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesAppoinment;