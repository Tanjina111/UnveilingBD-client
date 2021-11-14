import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const AdminRoute = ({children, ...rest}) => { 
    const {user, admin, isLoading} = useAuth();

    if(isLoading){
    return ( 
            <div className="spinner-border text-primary my-5" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
    );
    }
    
    return (
        <Route
        {...rest}
        render = {({location}) => user.email && admin ? 
        children : 
        <Redirect
        to={{
            pathname: '/',
            state: {from: location}
        }}
        ></Redirect>}>
        </Route>
    );
};

export default AdminRoute;