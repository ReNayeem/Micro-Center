import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import toast from 'react-hot-toast';
import auth from '../../Firebase/firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';
import './Register.css'


const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');

    const passwordRef = useRef('');

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [token] = useToken(user)

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-center'><small className='text-danger'>Error: {error?.message}</small></p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email successfully sent')
        }
        else {
            toast.error('Please enter your email')
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='p-5 align-items-center justify-content-between login'>
            <div className='d-flex form-text'>
                <h5 className='h5-text mb-3'>login</h5>
                <button onClick={resetPassword} className='p-text reset-button mb-3'>Reset password?</button>
            </div>
            <Form onSubmit={handleSubmit} className='d-flex form-container flex-column'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} name='email' className='form-input' type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} name='password' type="password" className='form-input' placeholder="password" required />
                </Form.Group>
                <hr className='login-hr' />
                {errorElement}
                <button className='custom-button mx-auto' type="submit">Sign In</button>
                <p className='text-center my-1'><small>or</small></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;