import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import CheckoutForm from './CheckoutForm';
import './Dashboard.css'

const stripePromise = loadStripe(
  'pk_test_51L3XMQDNh8mMBN9wEvf3FEDndDtedrxE9iMV3JkeqEhV1Y4rs6SOi7MwVLAEUebdVXnQD4z7oCZCzZmpmUusgUlV005QS12lSY'
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://micro-center.herokuapp.com/orders/${id}`;
  const { data: pay, isLoading } = useQuery(['orders', id], () =>
    fetch(url, {
      method: 'GET'
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <div className='p-5'>
        <h2>{pay?.name}</h2>
        <hr />
        <p>Payment For: {pay?.product}</p>
        <p class="card-text">Amount: ৳ {pay?.totalPrice} TK</p>
      </div>
      <div class="mb-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm pay={pay} />
        </Elements>
      </div>
      <PageTitle title="Payment"></PageTitle>
    </div>
  );
};

export default Payment;
