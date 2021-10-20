import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGit,  setError, handleEmail, handlePass, signInUsingGoogle, error, handleReg, handleName } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
                setError(error.message)
            })
    }
    const handleGit = () => {
        signInUsingGit()
            .then(result => {
                history.push(redirect_url)
                setError(error.message)
            })
    }
    return (

            <div className="login-form">
                <div className="login shadow-lg rounded">
                    <h3 className="mt-2 text-light mb-4">Login</h3>
                    <hr className="text-light mb-4" />
                    <form onSubmit={handleReg}>
                        <input onBlur={handleName} className="text" type="text" placeholder="Your Name" required />
                        <br />
                        <input onBlur={handleEmail} className="email" type="email" placeholder="Your Email" required />
                        <br />
                        <input onBlur={handlePass} className="password" type="password" placeholder="Your Password" required />
                        <br />
                        <input className="mb-4 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
                    </form>
                    <p className="text-light">New to Popular? <Link className="create-account ms-2" to="/register">Create Account</Link> </p>
                    <div className="mb-3 mt-4 text-light">---------- Or login with ------------</div>
                    <div className="social-icon">
                        <i onClick={handleGoogle} className="fab fa-google google"></i>
                        <i onClick={handleGit} className="fab fa-github github"></i>

                    </div>
                </div>
            </div>
        );
};

export default Login;

