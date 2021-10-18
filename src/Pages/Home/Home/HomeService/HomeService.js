import React from 'react';
import './HomeService.css'

const HomeService = (props) => {
    const { id, name, price, viewes, comments, description, imgURL } = props.homeservice;
    return (
        <div>
            <div className="mt-5">
                <div className="col">
                    <div className="card service-card">
                        <div className="d-lg-flex align-items-center">
                            <div>
                                <img className="img-fluid service-img shadow rounded" src={imgURL} alt="..." />
                            </div>
                            <div>
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description.slice(0, 100)}</p>
                                    <button className="btn btn-primary">See more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;