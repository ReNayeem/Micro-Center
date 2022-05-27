import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, Navigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useItemDetail from '../../hooks/useItemDetail';
import Loading from '../../Shared/Loading/Loading';

import './ItemDetail.css'

const ItemDetail = () => {
    const { itemId } = useParams();
    const [user, loading] = useAuthState(auth);

    const [count, setCount] = useState(false);
    const [productName, setProductName] = useState('');
    const [price2, setPrice] = useState(0);
    const [loader, setLoader] = useState(false);
    const [product, setProducts] = useState({});
    const [item, setItem] = useItemDetail(itemId);
    const { _id, name, fullName, rated, processor, speed, ram, gpu, storage, os, quantity, img, minimumOrder, price } = item;

    useEffect(() => {
        setLoader(true);
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setProductName(data.name)
                setLoader(false);
                setPrice(data.price)
            });
    }, [itemId]);

    const checkCount = (e) => {
        e.preventDefault();
        const productQuantity = e.target.unit.value;
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Phone = e.target.phone.value;
        const Address = e.target.address.value;
        const totalPrice = parseInt(product.price * productQuantity)
        // console.log(totalPrice);

        const Order = { name: Name, quantity: productQuantity, email: Email, phone: Phone, address: Address, product: productName, price2: price, totalPrice: totalPrice }

        if (productQuantity < product.minimumOrder || productQuantity > product.quantity) {
            setCount(true);
            const again = window.confirm('Buy more units')
            console.log(again);
            if (again) {
                setCount(false);
            }
            else {
                toast.error(`Your item quantity doesn't fullfil our requirements.`)
                Navigate('/home')
            }

        } else {
            toast.success('Order succeeded. Please pay from your order page.');
            let quantityNumber = parseInt(product.quantity);
            let quantityNumberUp = parseInt(productQuantity);
            let updateTheQuantity = quantityNumber - quantityNumberUp
            let newQuantity = {
                _id: product._id,
                name: product.name,
                img1: product.img1,
                img2: product.img2,
                price: product.price,
                quantity: updateTheQuantity,
                minOrder: product.minOrder,
                description: product.description
            }
            const url2 = `http://localhost:5000/products/${itemId}`;
            fetch(url2, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then((res) => res.json())
                .then((data) => {

                    setProducts(newQuantity);
                    console.log('data success', data);

                });

            const url = 'http://localhost:5000/orders';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Order)
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                });
            e.target.reset()
            setCount(false);
        }


    };

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
                        <h5 className='mt-3 mb-3'>Supported Components:</h5>
                        <p>Processor up-to: {processor}</p>
                        <p>Graphics Card up-to: {gpu}</p>
                    </div>
                    <div className='item-description'>
                        <h3 className='item-name'>Best build for: {fullName}</h3>
                        <p>{rated}</p>
                        <p className='item-description-bold'>৳ {price} TK</p>
                        <p>Quantity Available: {quantity}</p>
                        <p className='item-description-bold'>Minimum Order: {minimumOrder}</p>

                        <form onSubmit={checkCount}>

                            <div class="mb-3">
                                <input type="text"
                                    readOnly
                                    value={user?.displayName} name='name' class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input type="text"
                                    readOnly
                                    value={user?.email} name='email' class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input name='address'
                                    required placeholder='Enter your address' type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input name='phone'
                                    required placeholder='Enter your contact number' type="number" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <input name='unit' placeholder='Enter quantity number' class="form-control"
                                    required rows="3"></input>
                            </div>
                            <button className='purchase-button' disabled={count} type='submit'>BUY NOW</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemDetail;