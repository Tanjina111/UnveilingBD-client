import React, { useEffect, useState } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import { Route, useRouteMatch } from 'react-router';
import useAuth from '../../Hook/useAuth';
import Image from './pp..jpg';
import Image2 from './book.jpg';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import Footer from '../Shared/Footer/Footer';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageBooks from '../ManageBooks/ManageBooks';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';


const DashBoard = () => {

    const {user, admin, logOut} = useAuth();
    let {path, url} = useRouteMatch();
    
    // Load Admin Data
    //     useEffect(() => {
    //     fetch(`https://agile-escarpment-46440.herokuapp.com/users/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => setAdmin(data.admin))
    // }, [user.email])

    return (
        <div>
        <nav style={{backgroundColor: 'black'}} className="navbar navbar-light py-4">
        <div className="container">
        
        <div className='d-flex align-items-center'>
        <button  style={{backgroundColor: 'white'}} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h5 className='text-warning text-start ms-2'>Dash Board</h5>
        </div>
        <div className='d-flex'>
        <h5 className='m-auto'><NavLink className='text-decoration-none me-3 text-warning navs' to='/home'><i className="fas fa-home"></i> Home</NavLink></h5>
        <button className='btn btn-warning m-auto' onClick={logOut}>Logout</button>
        </div>
    
        <div style={{width: '200px', backgroundColor: 'black'}} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
          <NavLink className="navbar-brand" to="/home"><img src={Image} className='img-fluid w-100' alt="" /></NavLink>
            <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          {/* Dash Board */}
          <div className="offcanvas-body">
        <ul className="navbar-nav">
      
            {
                user?.email && 
               <>
                {
                    !admin ?
                
                    // Customer Routes
                <> 
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashorders`}>My Orders</NavLink></li>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashaddreview`}>Add Review</NavLink></li>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashpayment`}>Payment</NavLink></li>
                </>

                :

                // Admin Routes
                <>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashmakeadmin`}>Make New Admin</NavLink></li>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashmanageorders`}>Manage Orders</NavLink></li>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashaddservice`}>Add Service</NavLink></li>
                <li className='m-3 navs text-center'><NavLink className=' text-decoration-none text-light' to={`${url}/dashmanagebooks`}>Manage Products</NavLink></li>
                </>
                }
                </>   
            }     
            </ul>
          </div>
        </div>
      </div>
    </nav>

    {/* Dash Board Routes */}
    <Switch>
            <Route exact path={path}>
              <img className='img-fluid w-100' src={Image2} alt="" />
            </Route>

            {/* Customer Route */}
            <Route path={`${path}/dashorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/dashaddreview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/dashpayment`}>
              <Payment></Payment>
            </Route>

            {/* Admin Route */}
            <AdminRoute path={`${path}/dashmanageorders`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/dashmanagebooks`}>
              <ManageBooks></ManageBooks>
            </AdminRoute>
            <AdminRoute path={`${path}/dashaddservice`}>
              <AddService></AddService>
            </AdminRoute>
            <AdminRoute path={`${path}/dashmakeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
      </Switch>  

          <Footer></Footer>
            </div>
    );
};

export default DashBoard;