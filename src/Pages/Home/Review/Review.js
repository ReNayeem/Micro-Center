import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
import Loading from '../../../Shared/Loading/Loading';
import Reviews from '../Reviews/Reviews';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();
    const reverseReviews = reviews.reverse();
    const navigate = useNavigate()
    const clickToAllReviews = () => {
        navigate('/all-reviews')
    }
    return (
        <div>
            <div className='second-section pb-5'>
                <div className='p-5'>
                    <h2>Customer Reviews</h2>
                    <hr />
                    <p>See our valuable new customers review</p>
                </div>
                {
                    reviews.length === 0 ? (<Loading></Loading>) : ''
                }
                <div className='home-reviews container'>
                    {
                        reverseReviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>

                <button onClick={clickToAllReviews} className="first-section-button mt-4">
                    <span className="hover-underline-animation"> Show all reviews </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Review;