import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './NotFound.css'
import notFoundImage from '../../../src/images/notFoundImage.png'

const NotFound = () => {
    return (
        <div id="notfound" className='d-flex flex-wrap align-items-center justify-content-center'>
            <img className='notFoundImage p-2' src={notFoundImage} alt="" />
            <div class="notfound">
                <div class="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>we are sorry, but the page you requested was not found</h2>
            </div>
            <PageTitle title="Page Not Found"></PageTitle>
        </div>
    );
};

export default NotFound;