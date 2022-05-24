import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import Loading from '../../Shared/Loading/Loading';

import './ItemDetail.css'

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const { _id, name, fullName, rated, processor, speed, ram, gpu, storage, os, quantity, img, minimumOrder, price } = item;

    return (
        <div className='container mb-5'>
            <div className='my-5 item-text-header text-center'>
                <p>Item detail of</p>
                <h1>{name}</h1>
                <hr />
            </div>
            {
                item.length === 0 ? (<Loading></Loading>) : ''
            }
            <div className='item-details-2'>
                <div className='d-flex flex-wrap item-details justify-content-center align-items-center'>
                    <div className='item-image text-start'>
                        <img className='item-detail-image' src={img} alt="" />
                        <h5 className='mt-1 mb-3'>Supported Description:</h5>
                        <p>Processor up-to: {processor}</p>
                        <p>Graphics Card up-to: {gpu}</p>
                    </div>
                    <div className='item-description'>
                        <h3 className='item-name'>Best build for: {fullName}</h3>
                        <p>{rated}</p>
                        <p className='item-description-bold'>৳ {price} TK</p>
                        <p>Quantity Available: {quantity}</p>
                        <h5 className='mt-1 mb-3'>Supported Description:</h5>
                        <p>Processor up-to: {processor}</p>
                        {/* <p>Processor Speed: {speed}</p> */}
                        {/* <p>RAM: {ram}</p> */}
                        <p>Graphics Card up-to: {gpu}</p>
                        {/* <p>Storage: {storage}</p> */}
                        {/* <p>OS: {os}</p> */}
                        <p className='item-description-bold'>Minimum Order: {minimumOrder}</p>

                        <form className='update-item' >
                            <span className="d-flex">
                                <input placeholder='add quantity here' className='quantity-input text-center' type="number" name="number" required /> <br />
                                <div className="update-stock-button">
                                    <i class="fa-solid fa-cart-shopping cart-icon"></i>
                                    <input className='buy-now-button' type="submit" value="BUY NOW" />
                                </div>
                            </span>
                        </form>
                    </div>
                </div>

            </div>
            {/* <div className='d-flex mt-3 justify-content-center justify-content-lg-end'>
                <Link as={Link} to="/manage">
                    <button className="banner-button">
                        <span className="hover-underline-animation"> Manage items </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default ItemDetail;