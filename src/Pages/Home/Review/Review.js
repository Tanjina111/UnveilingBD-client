import React from 'react';
import Rating from 'react-rating';
import './Review.css'


const Review = (props) => {
    const { name, email, review, rating } = props.reviews;

    return (
        <div className='col'>
            <div className='card h-100 text-start shadow'>
            <div className='card-body'>
                <h4 className='text-danger'>{name}</h4>
                <h6>Email: <span className='text-primary'>{email}</span></h6>
                <p>{review}</p>
                <h6 className='text-primary'>Rating:</h6>
                <Rating
                 initialRating={rating}
                 emptySymbol="far fa-star icon-color"
                 fullSymbol="fas fa-star icon-color"
                ></Rating><br />
                <br />
        </div>
        </div>
        </div>
    );
};

export default Review;