import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, imgURL, description, price } = props.service;
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
                                    <button className="btn btn-outline-danger">See more</button>
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