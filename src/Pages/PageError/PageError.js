import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Image from './err.png'

const PageError = () => {
    return (
        <div>
            <Navigation></Navigation>

            <img src={Image} alt="" className='img-fluid w-100'/>

            {/* Back to home button */}
            <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default PageError;