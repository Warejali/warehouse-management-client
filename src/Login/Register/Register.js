import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import './Register.css'

const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }

    const registerSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/emailVerify');
    }

    return (
        <div className='register-form w-50 mx-auto my-5'>
            <h1 className='text-primary text-center py-2'>Please Register</h1>
            <form onSubmit={registerSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-success' : ''}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>

                <p className='text-danger'>{error}</p>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit" value="Register" />


            </form>
            <div className='text-center'>
                <p>Have You already account? <span className='btn text-danger' onClick={goToLogin}>Please Login</span></p>
            </div>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;