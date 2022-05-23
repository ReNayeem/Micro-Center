import React from 'react';
import './Reviews.css'

const Reviews = ({ review }) => {
    const { userName, itemName, description, rating } = review
    return (
        <div className='reviews-style'>
            <h4>{userName}</h4>
            <p>review of product ({itemName})</p>
            <div className='reviews-position'>
                <h5>{description}</h5>
                <h5>Rating: {rating}⭐</h5>
            </div>
        </div>
    );
};

export default Reviews;