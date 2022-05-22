import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

import './ItemDetail.css'

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const { _id, name, quantity, img, description, price } = item;

    const handleDeliver = () => {
        let deliver = 1;
        let quantityNumber = parseInt(item.quantity);
        let quantity = quantityNumber - deliver;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                }
            })
    }
    const newStock = e => {
        e.preventDefault();
        let quantityPrevious = item.quantity;
        let quantityPreviousNum = parseInt(quantityPrevious);
        let taken = parseInt(e.target.number.value);
        let quantity = quantityPreviousNum + taken;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                    e.target.reset();
                }
            })
    }
    return (
        <div className='container mb-5'>
            <div className='my-5 item-text-header text-center'>
                <p>Product detail of</p>
                <h1>{name}</h1>
                <hr />
            </div>
            <div className='item-details-2'>
                <div className='d-flex flex-wrap item-details justify-content-center align-items-center'>
                    <img className='item-detail-image' src={img} alt="" />
                    <div className='w-auto'>
                        <h3 className='item-name text-lg-end text-center'>{name}</h3>
                        <p className='item-description text-lg-end text-center'><small>{description}</small></p>
                        <p className='item-detail text-lg-end text-center'>৳ {price} TK</p>
                        <p className='item-detail text-lg-end text-center'>Quantity: {quantity}</p>


                    </div>
                </div>
                <div className="d-flex mt-3 flex-column align-items-center justify-content-center flex-wrap">
                    <button onClick={() => { handleDeliver() }}
                        className="deliver-button mb-3">DELIVER</button>
                    <form className='update-item' onSubmit={newStock}>
                        <span className="d-flex">
                            <input placeholder='input here' className='quantity-input text-center' type="number" name="number" required /> <br />
                            <input className="update-stock-button" type="submit" value="UPDATE STOCK" />
                        </span>
                    </form>
                </div>
            </div>
            <div className='d-flex mt-3 justify-content-center justify-content-lg-end'>
                <Link as={Link} to="/manage">
                    <button className="banner-button">
                        <span className="hover-underline-animation"> Manage items </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;