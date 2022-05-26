import React from 'react';
import './Upcoming.css'

const Upcoming = () => {
    return (
        <div className="upcoming my-5 container">
            <h1>Upcoming Items Category</h1>
            <hr />
            <p className='mb-5'>Register for New Upcoming Items and Discounts Offer Notification</p>
            <div className="upcoming-categories">
                <div className="upcoming-category">
                    <span><i className="fas fa-camera"></i></span>
                    <h2>Camera</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-headset"></i></span>
                    <h2>Headset</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-lightbulb"></i></span>
                    <h2>Light</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-memory"></i></span>
                    <h2>Memory</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-hdd"></i></span>
                    <h2>HDD</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-sd-card"></i></span>
                    <h2>SD card</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-print"></i></span>
                    <h2>Printer</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-clock"></i></span>
                    <h2>Smartwatch</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="far fa-keyboard"></i></span>
                    <h2>Keyboard</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-mouse"></i></span>
                    <h2>Mouse</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-desktop"></i></span>
                    <h2>Monitor</h2>
                </div>
                <div className="upcoming-category">
                    <span><i className="fas fa-laptop"></i></span>
                    <h2>Laptop</h2>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;