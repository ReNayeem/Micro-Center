import React from 'react';
import useReviews from '../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import Reviews from '../Home/Reviews/Reviews';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='all-reviews'>
            <div className='second-section pb-5'>
                <div className='p-5'>
                    <h2>All Customer Reviews</h2>
                    <hr />
                    <p>See our all valuable customers review</p>
                </div>
                <div className='home-reviews container pb-5'>
                    {
                        reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;