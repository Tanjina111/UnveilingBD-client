import React from 'react';
import { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // Make Admin
    const adminSubmit = e => {
        const user = {email};
        fetch('https://murmuring-brook-36809.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json()
        .then(data => {
            if(data.modifiedCount)
            console.log(data);
            setSuccess(true)
        }))
        e.preventDefault()
    }

    return (
        <div className='admin-bg'>
            <div className='text-start p-5'>

            {/* Make Admin */}
            <h5 className='text-light pt-5 text-decoration-underline'>Make An Admin</h5>
            <div className='my-3'>
            <form onSubmit={adminSubmit}>
                <input className='w-50' type="email" name="email" onBlur={handleOnBlur} placeholder='Type Email'/>
                <button className='btn btn-warning ms-1 px-4' type="submit" value="Submit">Enter</button>
            </form>

            {/* Result */}
            {success && alert('Admin added.')}
            </div>
            </div>
            {/* <img className='img-fluid w-100' src={Image} alt="" /> */}
        </div>
    );
};

export default MakeAdmin;