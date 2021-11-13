import React from 'react';
import img1 from './bk.jpg';
import img2 from './ng.jpg';
import img3 from './card.jpg'

const Payment = () => {
    return (
        <div className='container my-4'>
            <div className='col-lg-6 mx-auto'>
            <h4>Choose Your Payment Method</h4>
            <img width='300px' className='img-fluid' src={img1} alt="" /><br /><br />
            <img width='300px' className='img-fluid' src={img2} alt="" /><br /><br />
            <img width='300px' className='img-fluid' src={img3} alt="" />
            </div>
        </div>
    );
};

export default Payment;