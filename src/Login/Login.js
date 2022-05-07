import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import useToken from '../hooks/useToken';



const Login = () => {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  const formSubmit = async event =>{
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    // const {data} = await axios.post('http://localhost:5000/login', { email });
    // localStorage.setItem('accessToken', data.accessToken);
    // navigate(from, { replace: true });
  }

  const inputEmail = event =>{
    setEmail(event.target.value)
  }
  const inputPassword = event =>{
    setPassword(event.target.value)
  }

  const resetPassword = async() =>{
    await sendPasswordResetEmail(email);
    toast('sent to Your Email')
  }

  const [token] = useToken(user)

  if (error) {
    return <p>Error: {error.message}</p>  
  }
  if (loading) {
    return <p><Loading></Loading></p>;
  }
  if (token) {
        navigate(from, {replace: true} );
  }

  const goToRegister = () => {
    navigate('/register')
}

    return (
        <div className='login-form w-50 mx-auto my-5'>
            <h1 className='text-primary text-center py-2'>Please Login</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={inputEmail} type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={inputPassword} type="password" required />
                </Form.Group>
                <Button className='mx-auto w-50 d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p>New to our Warehouse? <span className='btn text-danger' onClick={goToRegister}>Please register</span></p>
                <p>Forgotten Password? <span className='btn text-primary' onClick={() => resetPassword()}>Reset </span></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;