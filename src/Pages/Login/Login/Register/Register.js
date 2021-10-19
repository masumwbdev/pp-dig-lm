import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div className="register shadow-lg rounded">
                <h3 className="mt-1 text-light mb-4">Create account</h3>
                <hr className="text-light mb-2" />
                <form onSubmit="">
                    <label className="text-light" htmlFor="name">Your Name</label>
                    <br />
                    <input type="text" className="reg-name w-100" />
                    <br />
                    <label className="text-light" htmlFor="email">Email</label>
                    <br />
                    <input className="reg-email w-100" type="email" />
                    <br />
                    <label className="text-light" htmlFor="password">Password</label>
                    <br />
                    <input className="reg-password w-100" type="password" placeholder="At least 6 charecters" />
                    <br />
                    <input className="mb-3 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
                </form>
                <p className="text-light">
                    Already have an account? <Link className="create-account ms-2" to="/login">Login</Link> </p>
                <div className="mb-3 mt-4 text-light">---------- Or register with ------------</div>
                <div className="social-icon">
                    <i class="fab fa-google google"></i>
                    <i class="fab fa-github github"></i>
                    <i class="fab fa-facebook facebook"></i>
                </div>
            </div>
        </div>
    );
};

export default Register;