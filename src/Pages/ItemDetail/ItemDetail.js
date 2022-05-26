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



                        <div className='col mx-auto  col-sm-6 col-md-7 bg-success bg-gradient rounded-3 border border-warning border-5"'>
                            <Form onSubmit={checkCount}>
                                <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                                    <Form.Label>
                                        <h3>Product Count</h3>
                                    </Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="text"
                                        className="mb-3 "
                                        value={user?.displayName}
                                        readOnly
                                    />
                                    <Form.Control
                                        name="email"
                                        type="text"
                                        className="mb-3 "
                                        value={user?.email}
                                        readOnly

                                    />
                                    <Form.Control
                                        name="address"
                                        type="text"
                                        placeholder="Enter your address"
                                        className="mb-3 "
                                        required
                                    />
                                    <Form.Control
                                        name="phone"
                                        type="number"
                                        placeholder="Enter your number"
                                        className="mb-3 "
                                        required
                                    />
                                    <Form.Control
                                        name="unit"
                                        type="number"
                                        placeholder="Enter total unit number"
                                        className="mb-3 "
                                        required

                                    />
                                    <Form.Text className=" d-flex fw-bolder flex-row-reverse text-info">
                                        You have to enter the value in Number.
                                    </Form.Text>
                                </Form.Group>

                                <Button
                                    disabled={count}
                                    className="btn btn-dark"
                                    type="submit"
                                >
                                    Pay
                                </Button>
                            </Form>

                        </div>



                        {/*                         

                        <form className='update-item' >
                            <span className="d-flex">
                                <input placeholder='add quantity here' className='quantity-input text-center' type="number" name="number" required /> <br />
                                <div className="update-stock-button">
                                    <i class="fa-solid fa-cart-shopping cart-icon"></i>
                                    <input className='buy-now-button' type="submit" value="BUY NOW" />
                                </div>
                            </span>
                        </form> */}
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