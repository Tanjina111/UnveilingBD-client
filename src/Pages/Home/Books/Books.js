import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const { name, img, price, aut, des, _id } = props.books;

    return (
        // Books On Home
        <div className='col'>
            <div className='card h-100 text-start shadow'>
                <img height='300px' src={img} alt="" />
            <div className='card-body'>
                <h4 className='text-danger'>{name}</h4>
                <h6>By: <span className='text-primary'>{aut}</span></h6>
                <p>{des}</p>
                <h6>Price: <span className='text-danger'>${price}</span></h6>
                <br />

                {/* Get Detail Id */}
                <Link to={`/detail/${_id}`}><button className='btn btn-warning'>Book Now</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Books;