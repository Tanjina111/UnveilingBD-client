import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import React, { useState } from 'react';
import Image from './log.jpg'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { user, signInUsingGoogle, signInWithPass, isLoading, authError } = useAuth();

    // Google Log In
    const handleGoogleLogIn = () => {
        signInUsingGoogle(location, history)
    } 

    // Input Process
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // Login Process
    const loginSubmit = e => {
        signInWithPass(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <><Navigation></Navigation>
        <div className='container d-flex justify-content-evenly my-5 container row mx-auto'>
            <div className='col-12 col-lg-6 col-md-5'>

                {/* Login Form */}
                <h2 className='text-primary'>Login</h2>
                <div style={{backgroundColor: 'lightsteelblue'}} className='my-4'>
                    
                <form onSubmit={loginSubmit}>
                <h6 className='mt-2 py-2'>E-mail: </h6>
                <input className='w-50' type="text" name="email" onChange={handleOnChange} required placeholder='Enter Mail'/>
                <h6 className='mt-4'>Password: </h6>
                <input className='w-50' type="password" name="password" onChange={handleOnChange} required placeholder='Enter Password'/>
                <br />
                <input className='btn btn-primary my-4 px-4' type="submit" value="Login"/><br />
                
                {/* Spinner */}
                {isLoading && 
                <div className="spinner-border text-primary my-3" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                }

                {/* Result */}
                {user.email && 
                <h6 className='text-success my-3'>Successfully registered.</h6>
                }
                {authError && 
                <h6 className='text-danger pb-3'>Error!! Try again.</h6>
                }
                
                </form>
                </div>

                {/* Google Sign In */}
                <div className='mt-3'>You can also sign in with <span className='text-primary'>Google</span></div>
                <button className='my-2 btn btn-warning' onClick={handleGoogleLogIn}>Google Sign In</button>
                
                <h6 className='my-3'>New User? Please <NavLink to="/register"><button className='btn btn-warning'>Register</button></NavLink></h6>
                
            </div>
            <div className='col-12 col-lg-4 col-md-5'>
                <img className='img-fluid' src={Image} alt="" />
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default LogIn;