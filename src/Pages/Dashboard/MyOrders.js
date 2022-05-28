import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import PageTitle from '../Shared/PageTitle';
import './MyOrder.css'
import Order from './Order';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://micro-center.herokuapp.com/individual?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [user, order]);
  return (
    <div>
      <div className="my-5 text-center">
        <h2>{user?.displayName}</h2>
        <h6 className="">{user?.email}</h6>
        <hr />
        <h3 className="">Ordered Product</h3>
      </div>

      <div className='order-table mb-5'>
        <table class="table shadow border-warning">
          <thead className="table-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <Order index={index} order={order}></Order>
            ))}
          </tbody>
        </table>
      </div>
      <PageTitle title="My Orders"></PageTitle>
    </div>
  );
};

export default MyOrders;
