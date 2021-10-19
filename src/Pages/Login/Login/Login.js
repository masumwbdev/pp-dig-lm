import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    // const { handleGit, signInUsingGoogle } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/shop';

    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //     .then(result => {
    //         history.push(redirect_uri)
    //     })
    // }
    // const handleGitSignIn = () => {
    //     handleGit()
    //     .then(result => {
    //         history.push(redirect_uri)
    //     })
    // }

    return (

        <div className="login-form">
            <div className="login shadow-lg rounded">
                <h3 className="mt-2 text-light mb-4">Login</h3>
                <hr className="text-light mb-4" />
                <form onSubmit="">
                    <input className="email" type="email" placeholder="Your Email" />
                    <br />
                    <input className="password" type="password" placeholder="Your Password" />
                    <br />
                    <input className="mb-4 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
                </form>
                <p className="text-light">New to Popular? <Link className="create-account ms-2" to="/register">Create Account</Link> </p>
                <div className="mb-3 mt-4 text-light">---------- Or login with ------------</div>
                <div className="social-icon">
                    <i className="fab fa-google google"></i>
                    <i className="fab fa-github github"></i>
                    <i className="fab fa-facebook facebook"></i>
                </div>
            </div>
        </div>
    );
};

export default Login;

