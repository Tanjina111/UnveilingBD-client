import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBooks = (props) => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-brook-36809.herokuapp.com/allBooks')
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    return (
        // All Books
        <div style={{backgroundColor: 'lightsalmon'}} className='container my-5 rounded'>
        <h3 className='text-dark pt-2'>Our Collection:</h3>
        <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
    {
        book.map(books =>
        <div className='col'>
            <div key={books._id} className='card h-100 text-start shadow'>
                <img height='300px' src={books.img} alt="" />
            <div className='card-body'>
                <h4 className='text-danger'>{books.name}</h4>
                <h6>By: <span className='text-primary'>{books.aut}</span></h6>
                <p>{books.des}</p>
                <h6>Price: <span className='text-danger'>${books.price}</span></h6>
                <br />

                {/* Get Detail Id */}
                <Link to={`/detail/${books._id}`}><button className='btn btn-warning'>Book Now</button></Link>
            </div>
        </div>
        </div>
        )};
        </div>

        {/* Back to home button */}
        <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link>
            </div>
        </div>       
    );
};

export default AllBooks;