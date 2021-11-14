import React, { useRef } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
// import Image from './park.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


const Detail = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const history = useHistory();
    const location = useLocation();

  // Get Data
    useEffect(() => {
    fetch(`https://agile-escarpment-46440.herokuapp.com/allBooks/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
    }, []);

    // Form
    const {user} = useAuth();

    const nameRef = useRef();
    const serviceRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const orderSubmit = e => {
        const name = nameRef.current.value;
        const service = serviceRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const order = { name, service, price, email, phone, address, img};

        // Order Placed To New Database
        fetch('https://agile-escarpment-46440.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...order, status : 'Pending'})
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Your order has been placed. Thank you.');
                    e.target.reset();
                    history.push(location.state?.from || '/home');
                }
            })
            e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>

        <div className='d-flex justify-content-evenly my-5 container row mx-auto'>

            {/* Detail */}
        <div className="col-md-5 col-12 py-1 px-1 text-start mx-auto shadow rounded mb-1">
            <div className='p-2'>
            <div className='text-center border-bottom'>
            <img src={book?.img} className="img-fluid rounded mb-1" alt="..." />
            </div>
            <div className="card-text text-center mt-2">
            <p>{book?.detail}</p>
            <h6>Price: $<span className='text-danger'>{book?.price}</span></h6>
            </div>
            </div>
        </div>

        {/* Order Submit Form */}
        <div style={{backgroundColor: 'lightskyblue'}} className='col-md-5 my-auto py-3 col-12 rounded'>
            <h5 className='text-light border-bottom'>Order Form</h5>
        <form onSubmit={orderSubmit}>
            <h6 className='text-dark'>Order Detail:</h6>
            <input className='w-75 rounded' type="text" defaultValue={book?.name} ref={serviceRef} disabled/><br />
            <input className='w-75 rounded' type="text" defaultValue={book?.price} ref={priceRef} disabled/>
            <input type="text" defaultValue={book?.img} ref={imgRef} hidden/><br /><br /><br />
            <h6 className='text-dark'>User Detail:</h6>
            <input className='w-75' type="text" defaultValue={user?.displayName} ref={nameRef} /><br />
            <input className='w-75' type="text" defaultValue={user?.email} ref={emailRef} /><br /><br />
            <input className='w-75' type="text" placeholder='Type your exact address' ref={addressRef} required/><br />
            <input className='w-75' type="number" placeholder='Type your correct phone number' ref={phoneRef} required/><br /><br />
            <button type="submit" className='btn btn-warning mb-2'>Place Order</button>
        </form>
        </div>
        </div>

            {/* Back To Home */}
            <Link  to='/'><button className='btn btn-primary mt-2 mb-5'>Back To Home</button></Link>

        <Footer></Footer>
        </div>
    );
};

export default Detail;