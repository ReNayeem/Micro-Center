import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './Register.css'
import PageTitle from '../Shared/PageTitle';

const Authentication = () => {
    return (
        <div className='d-flex authentication align-items-center justify-content-center custom-container flex-wrap'>
            <Signup></Signup>
            <Login></Login>
            <PageTitle title="Login"></PageTitle>
        </div>
    );
};

export default Authentication;