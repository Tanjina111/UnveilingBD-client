import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Navigation.css';
import Image from './pp..jpg'

const Navigation = () => {
    const {user, logOut} = useAuth();  

    return (
        <div>
            <nav style={{backgroundColor: "black"}} className="navbar">
            <div className="container-fluid">
            <img src={Image} className='img-fluid text-start' alt="" />
            
            {/* Routes */}
            <div className='col-lg-6 col-md-5 col-12 d-flex justify-content-around'>

            <NavLink className='m-auto text-decoration-none text-white navs' to="/">Home</NavLink>

            {user.email && <NavLink className='m-auto text-decoration-none text-white navs' to="/dash">Dash Board</NavLink>}

            <div className='m-auto'>
                {user.email && <span className='d-flex align-items-center fw-bolder pe-1' style={{color: 'white'}}> {user.displayName}</span>}</div>
            <div className='m-auto text-center'>
                {
                    user.email ?
                    <button className='btn btn-warning' onClick={logOut}>Logout</button>
                    :
                    <NavLink className='m-auto text-decoration-none text-white navs' to="/login">Login</NavLink>
                }
            </div>
            </div>   
            </div>
            </nav>
        </div>
    );
};

export default Navigation;