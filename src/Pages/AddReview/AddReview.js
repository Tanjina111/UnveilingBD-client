import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const AddReview = () => {
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();

    const reviewSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;

        const reviews = { name, email, review, rating};

    // Rreview Placed To New Database
    fetch('https://murmuring-brook-36809.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...reviews})
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Your review has been placed. Thank you.');
                    e.target.reset();
                }
            })
            e.preventDefault();
    }

    return (
        // Add Review
        <div className='container my-4'>
        <div style={{backgroundColor: 'lightskyblue'}} className='col-md-5 my-auto py-3 col-12 rounded mx-auto'>
        <h5 className='text-light border-bottom'>Give Your Review</h5>
        <form onSubmit={reviewSubmit}>
        <h6 className='text-dark'>User Detail:</h6>
        <input className='w-75' type="text" defaultValue={user?.displayName} ref={nameRef} disabled/><br />
        <input className='w-75' type="text" defaultValue={user?.email} ref={emailRef} disabled/><br /><br />
        <textarea className='w-75' name="" id="" cols="30" rows="10"  ref={reviewRef} placeholder='Type your saying.'></textarea><br /><br />
        <input className='w-75' type="number"  min="0" max="5" ref={ratingRef} placeholder='Your rating'/><br /><br />
        <button type="submit" className='btn btn-warning mb-2'>Place Review</button>
        </form>
        </div>
        <Link  to='/'><button className='btn btn-primary mt-2 mb-5'>Back To Home</button></Link>
        </div>
    );
};

export default AddReview;