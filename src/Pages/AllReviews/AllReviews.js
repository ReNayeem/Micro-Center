import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
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
                {
                    reviews.length === 0 ? (<Loading></Loading>) : ''
                }
                <div className='home-reviews container pb-5'>
                    {
                        reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>
                <div className='d-flex container justify-content-end'>
                    <Link as={Link} to="/dashboard/add-review">
                        <button className="banner-button">
                            <span> Add a review </span>
                            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <PageTitle title="Reviews"></PageTitle>
        </div>
    );
};

export default AllReviews;