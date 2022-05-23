import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Item from '../Home/Item/Item';

const AllItems = () => {
    const [items] = useItems()

    return (
        <div id="items" className='container mb-5'>
            <PageTitle title="All Items"></PageTitle>
            <div className="row">
                <div className='mb-4 mt-5 third-section'>
                    <h1>All Items</h1>
                    <hr />
                    <p>Get Your Desired Item from All Items</p>
                </div>
                {
                    items.length === 0 ? (<Loading></Loading>) : ''
                }
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
            <div className='d-flex mt-3 justify-content-end'>
                <Link as={Link} to="/AddItem">
                    <button className="banner-button">
                        <span className="hover-underline-animation"> Add New Item </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllItems;