import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Authentication = () => {
    return (
        <div className='d-flex align-items-center justify-content-center custom-container flex-wrap'>
            <Register></Register>
            <Login></Login>
        </div>
    );
};

export default Authentication;