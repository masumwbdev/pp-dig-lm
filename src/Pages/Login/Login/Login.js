import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGit, signInUsingEmailPassword, handleEmail, handlePass, signInUsingGoogle } = useAuth();
    return (

        <div className="login-form">
            <div className="login shadow-lg rounded">
                <h3 className="mt-2 text-light mb-4">Login</h3>
                <hr className="text-light mb-4" />
                <form onSubmit={signInUsingEmailPassword}>
                    <input onBlur={handleEmail} className="email" type="email" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePass} className="password" type="password" placeholder="Your Password" required />
                    <br />
                    <input className="mb-4 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
                </form>
                <p className="text-light">New to Popular? <Link className="create-account ms-2" to="/register">Create Account</Link> </p>
                <div className="mb-3 mt-4 text-light">---------- Or login with ------------</div>
                <div className="social-icon">
                    <i onClick={signInUsingGoogle} className="fab fa-google google"></i>
                    <i onClick={signInUsingGit} className="fab fa-github github"></i>

                </div>
            </div>
        </div>
    );
};

export default Login;

