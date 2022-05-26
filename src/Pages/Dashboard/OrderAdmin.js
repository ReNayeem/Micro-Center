import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useOrders from '../../hooks/useOrders';

const OrderAdmin = () => {
  const [orders] = useOrders()

  const Deliver = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success('Reload for See the update')

      });

  }
  return (
    <div className='container'>

      <div className='my-5 text-center'>


        <h1 className=''>All Ordered Item</h1>
      </div>

      <table class="table OverflowX table-borderless table-info container border mt-5 shadow border-warning">
        <thead className='table-dark'>
          <tr>

            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>

            <th scope="col">Deliver</th>



          </tr>
        </thead>
        <tbody>

          {
            orders?.map((order, index) => <tr>
              <th scope="row">{`${index + 1}`}</th>
              <td>{order?.product}</td>
              <td>{order?.quantity}</td>
              <td>{
                order?.paid ? <button onClick={() => { Deliver(order?._id) }} className='btn btn-sm btn-success'>✔</button> : <p>Payment<br></br>loading</p>
              }</td>


            </tr>)
          }


        </tbody>
      </table>

    </div>
  );
};

export default OrderAdmin;