import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div id="items" className='container mb-5'>
            <PageTitle title="Home"></PageTitle>
            <div className="row mb-3">
                <div className='mt-5 mb-4 third-section'>
                    <h1>Featured Products</h1>
                    <hr />
                    <p>Get Your Desired Product from Featured Products</p>
                </div>
                {
                    items.length === 0 ? (<Loading></Loading>) : ''
                }
                <div className="items-container">
                    {
                        items.slice(0, 3).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <Link as={Link} to="all-items">
                    <button className="banner-button">
                        <span> All items </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Items;