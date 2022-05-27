import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3bCHGukWgyisfprswZ3uX2ipSWNDq8vkJKV9Q8ptOUJP6RaGtyN5Igc0UA0B5UII6KbvkgxahXcpzPZoWD2QJx00zSI2t7be');

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([])
  const url = `http://localhost:5000/orders/${id}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [url])
  // const { data: order, isLoading, error, refetch } = useQuery(['order', id], () =>
  //   fetch(`http://localhost:5000/orders/${id}`)
  //     .then(res => res.json())
  // )
  // if (isLoading) {
  //   return <Loading />
  // }
  //    console.log(order);
  return (
    <div className='container'>
      <h5 className='text-info'>Please Pay For: {id}</h5>
      <div className="card mb-5">
        <h5>Hello, <span className='text-info'>{order.name}</span></h5>
        <h5 className='card-title text-uppercase'>{order.productName}</h5>
        <h5 className='card-text'> Please Pay: $ {order.totalPrice}</h5>
      </div>
      <div className="card">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;