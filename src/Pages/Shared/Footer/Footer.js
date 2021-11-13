import React from 'react';
import Image from './f.jpg'

const Footer = () => {
    return (

        // Footer
        <div style={{backgroundColor: 'black'}} className='p-3'>
            <div className='d-flex justify-content-between'>
            <div className='col-lg-4 col-2 ms-2 my-auto'>
                <img src={Image} alt="" className='img-fluid'/>
            </div>
            <div className='col-lg-7 col-9 m-auto'>
            <p className='text-light'>Enter your E-mail address for subscription</p>
            <div className='d-flex align-items-center justify-content-center'>
            <input className='w-100 p-1 m-1' type="email" name="" id="" placeholder='E-Mail'/>
            <button type="submit" className='btn btn-warning'>Subscribe</button>
            </div>
            <small className='text-light'>Copyright by Tanjina Arin 2021</small>
            </div>
            </div>
        </div>
    );
};

export default Footer;