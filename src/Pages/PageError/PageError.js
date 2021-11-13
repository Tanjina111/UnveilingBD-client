import React from 'react';
import { Link } from 'react-router-dom';
import Image from './err.png'

const PageError = () => {
    return (
        <div className=''>
            <img src={Image} alt="" className='img-fluid w-100'/>

            {/* Back to home button */}
            <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default PageError;