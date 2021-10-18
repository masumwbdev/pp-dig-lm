import React from 'react';
import './Booking.css'

const Booking = () => {
    return (
        <div>
            <div className="d-flex booking-container mt-5 mb-5">
                <div class="card text-white booking text-center">
                    <img src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h3 class="card-title mt-5 mb-3">FIND A CONSULTANT</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-light mt-4">FIND</button>
                    </div>
                </div>
                <div class="card text-white booking-two text-center">
                    <img src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h3 class="card-title mt-5 mb-3">APPOINTMENT</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-light mt-4">BOOKNOW</button>
                    </div>
                </div>
                <div class="card text-white booking text-center">
                    <img src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h3 class="card-title mt-5 mb-3">24 X 7 SERVICES</h3>
                        <p class="card-text">Our Helpline is available 24 hours a day 7 days a week call us any time</p>
                        <button className="btn btn-outline-light mt-4">DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;