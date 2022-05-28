import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './Buypage.css'

const Buypage = () => {
  const [user, loading] = useAuthState(auth);

  const [productname, setProductsname] = useState('');
  const [price, setPrice] = useState(0);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    setLoader(true);
    const url = `https://micro-center.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsname(data.name);
        setLoader(false);
        setPrice(data.price);
      });
  }, [id]);

  const checkCount = (e) => {
    e.preventDefault();
    const productQuantity = e.target.unit.value;
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Phone = e.target.phone.value;
    const Address = e.target.address.value;
    const totalPrice = parseInt(product.price * productQuantity);

    const Order = {
      name: Name,
      quantity: productQuantity,
      email: Email,
      phone: Phone,
      address: Address,
      product: productname,
      price: price,
      totalPrice: totalPrice
    };

    if (
      productQuantity < product.minorder ||
      productQuantity > product.quantity
    ) {
      setCount(true);
      const again = toast.error('Quantity does not match minimum requirements');
      if (again) {
        setCount(false);
      } else {
        toast.error(`You didn't fullfil our requirements`);
        navigate('/');
      }
    } else {
      toast.success('Please pay for confirm order');
      let quantityNumber = parseInt(product.quantity);
      let quantityNumberUp = parseInt(productQuantity);
      let updateTheQuantity = quantityNumber - quantityNumberUp;
      let newQuantity = {
        _id: product._id,
        name: product.name,
        img1: product.img1,
        img2: product.img2,
        price: product.price,
        quantity: updateTheQuantity,
        minorder: product.minorder,
        description: product.description
      };
      const url2 = `https://micro-center.herokuapp.com/products/${id}`;
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

      const url = 'https://micro-center.herokuapp.com/orders';
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
      e.target.reset();
      setCount(false);
    }
  };

  return (
    <div className='container mb-5'>
      <div className='my-5 item-text-header text-center'>
        <p>Item detail of</p>
        <h1>{product.name}</h1>
        <hr />
      </div>
      {
        product.length === 0 ? (<Loading></Loading>) : ''
      }
      <div className='item-details-2'>
        <div className='d-flex flex-wrap item-details justify-content-center align-items-center'>
          <div className='item-image text-start'>
            <img className='item-detail-image' src={product.img1} alt="" />
            <h5 className='mt-3 mb-3'>Supported Components:</h5>
            <p>Processor up-to: {product.processor}</p>
            <p>Graphics Card up-to: {product.gpu}</p>
          </div>
          <div className='item-description'>
            <h3 className='item-name'>Best build for: {product.fullName}</h3>
            <p>{product.rated}</p>
            <p className='item-description-bold'>৳ {price} TK</p>
            <p>Quantity Available: {product.quantity}</p>
            <p className='item-description-bold'>Minimum Order: {product.minorder}</p>

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

export default Buypage;
