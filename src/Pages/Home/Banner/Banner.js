import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='banner-background'>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>Great Selection of</h2>
                            <hr />
                            <h1 className='product-name-text text-center'><span className='h1-text-highlight-b1'>-DESKTOP-<br />COMPUTER</span></h1>
                            <hr />
                            <p className='product-detail text-center'>Good Price & Best Deals</p>
                            <Link as={Link} to="/all-items">
                                <button className="banner-button">
                                    BROWSE HERE
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn5.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='banner-background-2'>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>FIRST IS A NEW!?</h2>
                            <hr />
                            <h1 className='product-name-text text-center'><span className='h1-text-highlight-b1'>-FLAG-SHIP-<br />MODEL</span></h1>
                            <hr />
                            <p className='product-detail text-center'>INTERCHANGEABLE PARTS WITH WARRANTY</p>
                            <Link as={Link} to="/all-items">
                                <button className="banner-button">
                                    BROWSE HERE
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn6.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='banner-background-3'>
                <div className='banner'>
                    <div className='banner2 container d-flex'>
                        <div className='first-order'>
                            <h2 className='mb-3 banner-h2'>Easier Than Connecting A Cable</h2>
                            <hr />
                            <h1 className='product-name-text text-center'><span className='h1-text-highlight-b1'>-GAMING- DESKTOP<br />COLLECTION</span></h1>
                            <hr />
                            <p className='product-detail text-center'>Enjoy All The Gaming In Your Desktop</p>
                            <Link as={Link} to="/all-items">
                                <button className="banner-button">
                                    BROWSE HERE
                                </button>
                            </Link>
                        </div>
                        <div className='second-order'>
                            <img className='product-image' src="Resources/bn7.png" alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;