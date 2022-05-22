import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, quantity, minimumOrder, img, fullName, price } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item d-flex flex-column  align-items-center'>
            <div className='item-img d-flex justify-content-center align-items-center mb-2'>
                <img src={img} alt="" />
            </div>
            <h3 className='item-name'>{name}</h3>
            <p className='item-detail my-2'>৳ {price} TK</p>
            <p className='item-detail'>Quantity: {quantity}</p>
            <p className='item-description-2 mb-5'><small>{fullName}</small></p>

            {/* <button onClick={() => navigateToItemDetail(_id)} className='manage-button'>Buy Now</button> */}
            <div className='manage-button'>
                <p className='item-description-2'>Minimum Order Required: {minimumOrder}</p>
                <button className="cta">
                    <span onClick={() => navigateToItemDetail(_id)} className="hover-underline-animation"> buy now </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Item;