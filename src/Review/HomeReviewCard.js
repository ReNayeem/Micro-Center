import React from 'react';

import './Review.css'

const HomeReviewCard = ({ review }) => {
  const checking = parseInt(review.ratings)
  const Ratings = Math.round(checking)
  return (
    <div>
      <div className="myCarousel">
        <h3 className='review-description'>{review.username}</h3>
        <p className='review-description'>review of product: {review.name}</p>
        <p>{Ratings === 1 ? '⭐' : Ratings === 2 ? '⭐⭐' : Ratings === 3 ? '⭐⭐⭐' : Ratings === 4 ? '⭐⭐⭐⭐' : Ratings === 5 ? '⭐⭐⭐⭐⭐' : ''}</p>
        <h3 className='review-description mt-1'>
          "{review.description}"
        </h3>
      </div>
    </div>
  );
};

export default HomeReviewCard;