import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, study, depertment, imgURL } = props.doctor;
    return (
        <div>
            <div className="mt-5">
                <div className="col">
                    <div className="card card-doctor">
                        <div className="d-lg-flex align-items-center">
                            <div>
                                <img className=" doctor-img shadow rounded" src={imgURL} alt="..." />
                            </div>
                            <div>
                                <div className="card-body">
                                    <h5 className="doctor p-2 w-100">{name}</h5>
                                    <p>{study}</p>
                                    <p className="card-text">{depertment}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between ancor">
                            <div>
                                <a href="/">Make Appoinment</a>
                            </div>
                            <div>
                                <a href="/">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;