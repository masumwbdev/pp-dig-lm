import React from 'react';
import bed from '../../../images/bed.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="contact-container">
                        <div className="card bg-dark text-white contact">
                            <img src={bed} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h1 className="card-title text-center mt-5">Contact Us</h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h2 className="mb-3">We’d Love To Hear From You</h2>
                    <h6>We’re here to help and answer any question you might have..
                        We look forward to hearing from you</h6>
                </div>

            </div>
            <div className="contact-info" justify-content-between align-items-center>
                <div className="p-5">
                    <h1>Address</h1>
                    <hr className="w-50 mb-5" />
                    <div className="head-office">
                        <h2>Head Office</h2>
                        <h4>Comfort Tower</h4>
                        <h6>167/B, Green Road, Mirpore, Dhaka, Bangladesh.</h6>
                        <h6>info@popularbd.com</h6>
                        <h6>Phone : 02-46575, 02-3434232, 02-222246340, 02-86778668, 02-787856656 & 02-8987856</h6>
                        <h6>Extn : 0, 104 & 106</h6>
                        <h6>Mobile : 01739482099, 01783479347</h6>
                    </div>
                    <div className="branch mt-4">
                        <h2>Branch Office</h2>
                        <h6>Uttara Branch</h6>
                        <h6>House # 22, Road # Rabindra Sarani</h6>
                        <h6>Sector # 07, Uttara, Dhaka-1230</h6>
                        <h6>Telephone: 58956388 AND 58954726</h6>
                    </div>
                </div>
                <div className="p-5">
                    <h1>Contact Form</h1>
                    <hr className="w-50 mb-4" />
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Name</label>
                            <input placeholder="Your name" type="text" className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"placeholder="Your email" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Your current address" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="City name" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>Mymensingh</option>
                                <option>Dhaka</option>
                                <option>Rajshahi</option>
                                <option>Rangpur</option>
                                <option>Barishal</option>
                                <option>Chittagong</option>
                                <option>Sylhet</option>
                            </select>
                        </div>
                        
                        <div>
                            <textarea className="textarea" placeholder="Your message"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;