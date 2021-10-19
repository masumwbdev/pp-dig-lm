import React from 'react';
import bed from '../../images/bed.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div>
                <div className="about">
                    <div className="card bg-dark text-white contact">
                        <img src={bed} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h1 className="card-title text-center mt-5">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-us mt-5">
                <div className="p-3">
                    <img className="img-fluid rounded" src="https://images.pexels.com/photos/4167561/pexels-photo-4167561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="p-5">
                    <h2>Learn About us</h2>
                    <hr className="w-50" />
                    <p>Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation. <br />
                        After inauguration in the year 1993 COMFORT started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Comfort. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. Understanding this phenomenon, Comfort is committed to reduce the gap as much as possible;</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            <div className="container mt-5 fs-5">
                <p><span className="fw-bold">Popular Diagnoist Ltd.</span> Is a sister concern of Popular Diagnostic Limited, one of the largest pharmaceutical companies in the country which is famous for its consistent quality, conformance's with the international standards and ethical practices throughout all its processes.
                </p>
                <p>The <span className="fw-bold">Popular Diagnostic Ltd.</span> started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.</p>
                <p>We are committed to provide the best in class diagnostic services to all our customers with the ground breaking technologies combining with a dedicated team of professionals.</p>
                <p>We aim to support the physicians and other health care service providers with the power of diagnosis for a timely detection of the illness of their patients.  </p>
            </div>
        </div>
    );
};

export default About;