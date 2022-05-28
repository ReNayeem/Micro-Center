import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../Hooks/useData';
import Loading from '../pages/Shared/Loading';
import PageTitle from '../pages/Shared/PageTitle';
import Product from './Product';

const AllItems = () => {
    const [products] = useData()

    return (
        <div id="items" className='container mb-5'>
            <div className="row">
                <div id='items-title' className='mb-4 mt-5 upcoming'>
                    <h1>All Items</h1>
                    <hr />
                    <p>Get Your Desired Item from All Items</p>
                </div>
                {
                    products.length === 0 ? (<Loading></Loading>) : ''
                }
                <div className="items-container">
                    {
                        products.map(product => <Product key={Product._id} more={2} product={product}></Product>)
                    }
                </div>
            </div>
            <div className='d-flex mt-3 justify-content-end'>
                <Link as={Link} to="/blogs">
                    <button className="banner-button">
                        <span> go to blogs </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
            <PageTitle title="Products"></PageTitle>
        </div>
    );
};

export default AllItems;