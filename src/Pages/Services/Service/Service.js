import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { id, name, imgURL, description, price } = service;
    return (
        <div>
            <div class="">
                <div class="col">
                    <div class="card h-100 card-item">
                        <img src={imgURL} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description.slice(0, 180)}</p>
                        </div>
                        <div class="card-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="text-danger">$ {price}</h5>
                                </div>
                                <div>
                                    <Link to={`/service/${id}`}>
                                        <button className="btn btn-outline-danger">See more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;