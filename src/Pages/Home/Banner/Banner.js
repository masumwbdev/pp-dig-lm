import React from 'react';
import bannerImg from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div class="card">
                <img src={bannerImg} class="card-img" alt="..." />
                <div class="card-img-overlay mt-lg-5 text-dark">
                    <h3 class="card-title">NEWS & PERSPECTIVE</h3>
                    <h5 class="card-text">Your one-stop resource for medical news, clinical <br/> reference, and education.</h5>
                    <button className="btn btn-primary my-3">Sign up for FREE</button>
                    <p>Already a member? <a href="www.google.com" alt="">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;