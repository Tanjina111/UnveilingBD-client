import React, { useEffect, useState } from 'react';
import './Home.css';
import FB from './fb.png';
import Ins from './insta.png'
import { Link } from 'react-router-dom';
import Books from '../Books/Books';
import Review from '../Review/Review';

const Home = () => {
    const [book, setBook] = useState([]);
    const [review, setReview] = useState([]);

    // Load Book
    useEffect(() => {
        fetch('https://murmuring-brook-36809.herokuapp.com/allBooks')
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

     // Load Review
     useEffect(() => {
        fetch("https://murmuring-brook-36809.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);

    return (
        <div>
            {/* First part */}
        <div className="col-sm-12 bg-img">
            <div className='text-end p-5'>
            <Link to='/allthebooks'><button className='btn btn-warning px-5'>Explore More</button></Link>
            </div>
        </div>

        {/* Second Part */}
        <div className='container my-5'>
            <h3 className='text-danger'>Our Most Demanded Books:</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
        {
                        book.slice(0,6).map(books => <Books
                            key={books._id}
                            books={books}
                        >
                        </Books>)
                    }
        </div>
        </div>

        {/* Third Part */}
        <div className='container my-5 border-top'>
            <h3 className='text-primary'>Customer Review:</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
        {
                        review.map(reviews => <Review
                            key={reviews._id}
                            reviews={reviews}
                        >
                        </Review>)
                    }
        </div>
        </div>

        {/* Fourth Part */}
        <div style={{backgroundColor: 'lightskyblue'}} className='container container-fluid rounded my-4 py-3'>
            <h4>Visit Our Social Sites</h4>

            {/* Facebook Page Link */}
        <div className="d-flex justify-content-evenly my-5 container row mx-auto">
            <div className="d-flex bg-light col-md-5 col-12 p-1 text-start m-auto shadow rounded mb-1">
            <div className='my-auto'>
            <img className='img-fluid p-1 shadow rounded' src={FB} alt="" />
            </div>
            <div className="m-auto">
                <p className="text-start">Click here to visit our<br /><a href="https://www.facebook.com/unveilingbd/" rel="noopener noreferrer" target='_blank'><button className='btn btn-warning'>Facebook</button></a> page.</p>
            </div>
            </div>
    
            {/* Instagram Profile Link */}
            <div className="d-flex bg-light col-md-5 col-12 m-auto p-1 text-start shadow rounded">
            <div className='my-auto'>
                <img className='img-fluid p-1 shadow rounded' src={Ins} alt="" />
            </div>
            <div className="m-auto">
                <p className="text-start">Click here to visit our<br /><a href="https://www.instagram.com/unveilingbd/" rel="noopener noreferrer" target='_blank'><button className='btn btn-warning'>Instagram</button></a> profile.</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Home;