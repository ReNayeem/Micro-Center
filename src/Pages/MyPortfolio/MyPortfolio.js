import React from 'react';
import PageTitle from '../Shared/PageTitle';
import './MyPortfolio.css'

const MyPortfolio = () => {
    return (
        <div className='container mb-5'>
            <div className='mt-5 mb-5'>
                <h2 className='portfolio-title-text'>Md. Nayeem</h2>
                <hr />
                <p>ReNayeem@gmail.com</p>
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                <div className='text-end portfolio-left-half'>
                    <h3 className='portfolio-title-text'>Education</h3>
                    <p>B.Sc. in CSE</p>
                    <p>Daffodil International University</p>
                    <p>December 2019 - Current</p>
                </div>
                <div className='text-start portfolio-right-half'>
                    <h3 className='portfolio-title-text'>Skills</h3>
                    <p><span className='portfolio-mini-title'>Web Design:</span> JavaScript, React, Bootstrap,
                        Node JS, Express JS, MongoDB.</p>
                    <p><span className='portfolio-mini-title'>Editing:</span> Filmora 9, CutOut, Paint 3D.</p>
                    <p><span className='portfolio-mini-title'>Tools and Software:</span> GitHub Desktop, VS
                        Code, Heroku, Netlify, Firebase</p>
                </div>
            </div>
            <div>
                <h3 className='portfolio-title-text'>Projects live site links</h3>
                <hr />
                <a href="https://harmic-official.web.app">HARMIC</a>
                <br />
                <a href="https://to-todolist.web.app">To-Todolist</a>
                <br />
                <a href="https://re-bestbuy.netlify.app">Best Buy</a>
            </div>
            <PageTitle title="Portfolio"></PageTitle>
        </div>
    );
};

export default MyPortfolio;