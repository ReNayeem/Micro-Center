import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';
import './Register.css'

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(gUser)
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (token) {
        navigate(from, { replace: true });
    }
    if (gLoading) {
        return <Loading></Loading>
    }
    if (gError) {
        errorElement = <p className='text-center'><small className='text-danger'>Error: {gError?.message}</small></p>
    }
    return (
        <>
            {errorElement}
            < button onClick={() => signInWithGoogle()} className='custom-button google-button mx-auto' type="submit" >Google Sign In</button >
        </>
    );
};

export default SocialLogin;