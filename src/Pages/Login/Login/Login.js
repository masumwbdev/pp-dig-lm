import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGit, signInUsingEmailPassword, handleEmail, handlePass, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const handleGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (

        //     <div className="login-form">
        //         <div className="login shadow-lg rounded">
        //             <h3 className="mt-2 text-light mb-4">Login</h3>
        //             <hr className="text-light mb-4" />
        //             <form onSubmit={signInUsingEmailPassword}>
        //                 <input onBlur={handleEmail} className="email" type="email" placeholder="Your Email" required />
        //                 <br />
        //                 <input onBlur={handlePass} className="password" type="password" placeholder="Your Password" required />
        //                 <br />
        //                 <input className="mb-4 btn btn-warning btn-sm fs-6 submit-button w-100" type="submit" value="Continue" />
        //             </form>
        //             <p className="text-light">New to Popular? <Link className="create-account ms-2" to="/register">Create Account</Link> </p>
        //             <div className="mb-3 mt-4 text-light">---------- Or login with ------------</div>
        //             <div className="social-icon">
        //                 <i onClick={handleGoogle} className="fab fa-google google"></i>
        //                 <i onClick={signInUsingGit} className="fab fa-github github"></i>

        //             </div>
        //         </div>
        //     </div>
        // );


        <div>
            <form onSubmit={handleReg} className="w-50 mx-auto mt-5">
                <h2 className="text-primary mb-3">Please {isLogin ? 'Sign In' : 'Sign Up with gmail'}</h2>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleName} type="text" className="form-control" placeholder="Input your name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" placeholder="Input your email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" placeholder="Type your password" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Signed Up?
                            </label>
                        </div>
                    </div>
                </div>
                <div><p className="text-danger mb-2">{error}</p></div>
                <button onClick={resPass} className="btn btn-danger btn-sm">Reset Password</button> <br /><br />
                <button type="submit" className="btn btn-primary">{isLogin ? 'Sign In' : 'Sign Up'}</button>

            </form>
            <br /><br /><br />

            <div className="w-50 mx-auto">
                <div>----------------------------------------------------</div>
                <h2 className="text-primary mt-3">Please Sign In with google</h2>
                <button className="btn btn-primary mt-5" onClick={handleGoogle}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;

