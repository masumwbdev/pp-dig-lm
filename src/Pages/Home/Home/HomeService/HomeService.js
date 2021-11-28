import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css'

const HomeService = (props) => {
    const { id, name, description, imgURL } = props.homeservice;
    return (
        <div>
            <div className="mt-5 container-fluid">
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
                                    <Link to={`/appoinment/${id}`}>
                                        <button className="btn btn-primary">See more</button>
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

export default HomeService;