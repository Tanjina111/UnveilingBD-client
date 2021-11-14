import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Registration = () => {
    const { signUpWithPass, authError, isLoading, user } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    } 

    // Register
    const registerSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        signUpWithPass(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>

            <div className='container my-5'>
            <div>
                <h2 className='text-primary'>Register</h2>
                
                <div className='py-2 my-4' style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>
                <form onSubmit={registerSubmit}>
                {/* Input Name */}
                <input onBlur={handleOnBlur} className='mt-3 w-75' type="text" name="name" placeholder='Enter Your Name' required/>
                <br />

                {/* Input Mail */}
                <input onBlur={handleOnBlur} className='mt-3 w-75' type="text" name="email" placeholder='Enter Mail' required/>
                <br />

                {/* Input Pass */}
                <input onBlur={handleOnBlur} className='mt-3 w-75' type="password" name="password" placeholder='Enter Password' required/>
                <br />

                {/* Re-Enter Pass */}
                <input onBlur={handleOnBlur} className='mt-3 w-75' type="password" name="password2" placeholder='Re-Enter Password' required/>
                <br />
                <input className='mt-2 btn btn-primary px-4' type="submit" value="Submit" /><br />

                {/* Spinner */}
                {isLoading && 
                <div className="spinner-border text-primary my-3" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                }
                
                {/* Result */}
                {user.email && 
                <h6 className='text-success my-3'>Successfully registered.</h6>
                }
                {authError && 
                <h6 className='text-danger pb-3'>Error!! Try again.</h6>
                }

                </form>
                </div>
                

                {/* Take To Log In */}
                <p className='mt-4'>Already have an account? <Link to='/login'><button className='btn btn-warning'>Login</button></Link></p>
            </div>
        </div>

            <Footer></Footer>
        </div>
    );
};

export default Registration;