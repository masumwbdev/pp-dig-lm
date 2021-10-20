import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';
import './Register.css'

const Register = () => {
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
        <div className="register-form">
            <div className="register shadow-lg rounded">
                <h3 className="mt-1 text-light mb-4">Create account</h3>
                <hr className="text-light mb-2" />
                <form onSubmit={handleReg}>
                    <label className="text-light" htmlFor="name">Your Name</label>
                    <br />
                    <input onBlur={handleName} type="text" className="reg-name w-100" />
                    <br />
                    <label className="text-light" htmlFor="email">Email</label>
                    <br />
                    <input onBlur={handleEmail} className="reg-email w-100" type="email" />
                    <br />
                    <label className="text-light" htmlFor="password">Password</label>
                    <br />
                    <input onBlur={handlePass} className="reg-password w-100" type="password" placeholder="At least 6 charecters" />
                    <br />
                    <input className="mb-3 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
                </form>
                <p className="text-light">
                    Already have an account? <Link className="create-account ms-2" to="/login">Login</Link> </p>
                <div className="mb-3 mt-4 text-light">---------- Or register with ------------</div>
                <div className="social-icon">
                    <i onClick={handleGoogle} class="fab fa-google google"></i>
                    <i onClick={handleGit} class="fab fa-github github"></i>
                    <i class="fab fa-facebook facebook"></i>
                </div>
            </div>
        </div>
    );
};

export default Register;