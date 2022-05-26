import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../../Shared/Loading/Loading';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [token] = useToken(user)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token || user) {
        navigate(from, { replace: true });
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div>
            <div className='login p-5'>
                <Form onSubmit={handleRegister} className='d-flex form-container flex-column'>
                    <div className='d-flex form-title align-items-center justify-content-between'>
                        <h5 className='h5-text ms-0 mb-3'>register</h5>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" className='form-input' type="text" placeholder="username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" className='form-input' type="email" placeholder="email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control name="password" type="password" className='form-input' placeholder="password" required />
                    </Form.Group>
                    <hr className='login-hr' />
                    {errorElement}
                    <button className='custom-button mx-auto' type="submit">Sign Up</button>
                </Form>
            </div>
            <PageTitle title="Register"></PageTitle>
        </div>
    );
};

export default Register;