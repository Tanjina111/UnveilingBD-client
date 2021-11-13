import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Navigation.css';
import Image from './pp..jpg'

const Navigation = () => {
    const {user, logOut, admin} = useAuth();

    return (
        <div>
            <nav style={{backgroundColor: "black"}} className="navbar">
            <div className="container-fluid">
            <img src={Image} className='img-fluid' alt="" />
            

            {/* Routes */}
            <div className='col-lg-6 col-md-5 col-sm-12 d-flex'>

            <NavLink className='m-auto text-decoration-none text-white navs' to="/">Home</NavLink>

            <div className='m-auto text-center'>
            {
                // In Case of Customer
                user.email &&
                <li className="nav-item dropdown m-auto">
                <button className="nav-link dropdown-toggle btn btn-warning navs text-center text-dark my-auto" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/orders/:email'>My Orders</NavLink></li>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/addReview'>Add Review</NavLink></li>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/payment'>Payment</NavLink></li>
                <li className='m-auto navs text-center'><button className='btn btn-warning mx-auto' onClick={logOut}>Logout</button></li>
                </ul>
                </li>
            }
            {
                // In Case Of Admin
                admin.email &&
                <li className="nav-item dropdown m-auto">
                <button className="nav-link dropdown-toggle btn btn-warning navs text-center text-dark my-auto" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/makeAdmin'>Make New Admin</NavLink></li>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/manageorders'>Manage Orders</NavLink></li>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/addservice'>Add Service</NavLink></li>
                <li className='m-auto navs text-center'><NavLink className=' text-decoration-none text-dark' to='/manageBooks'>Manage Products</NavLink></li>
                <li className='m-auto navs text-center'><button className='btn btn-warning mx-auto' onClick={logOut}>Logout</button></li>
                </ul>
                </li>
            }
            </div>

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