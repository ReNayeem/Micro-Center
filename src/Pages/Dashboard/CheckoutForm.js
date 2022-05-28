import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ pay }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { totalPrice, _id, name, product, email } = pay;

  useEffect(() => {
    fetch('https://micro-center.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ totalPrice })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    setCardError(error?.message || '');
    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          }
        }
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your payment is completed.');
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      };
      fetch(`https://micro-center.herokuapp.com/orders/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
        <CardElement
          className='payment-card'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button
          className="payment-button"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          PAY
        </button>
      </form>
      {cardError && <p className="text-danger mt-3 text-center">{cardError}</p>}
      {success && (
        <div className="text-success mt-3 text-container">
          <p>{success} </p>
          <p>
            Your transaction Id:{' '}
            <span className="text-dark text-container font-bold">{transactionId}</span>{' '}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
