import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3bCHGukWgyisfprswZ3uX2ipSWNDq8vkJKV9Q8ptOUJP6RaGtyN5Igc0UA0B5UII6KbvkgxahXcpzPZoWD2QJx00zSI2t7be');



const Payment = () => {
  const { id } = useParams()
  const [pay, setPayment] = useState([])



  useEffect(() => {
    const url = `http://localhost:5000/orders/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setPayment(data))
  }, [id])

  console.log(pay)

  return (
    <div className='container'>
      <div class="card rounded-pill shadow-lg my-5 border border-success w-75">
        <div class="card-body">
          <h5 class="card-title">Pay For : {pay?.product}</h5>

          <p class="card-text">{pay?.name}</p>
          <p class="card-text">Please Pay: ${pay?.totalPrice}</p>

        </div>

      </div>
      <div class="card-body w-75 rounded border border-warning shadow-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm pay={pay} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;