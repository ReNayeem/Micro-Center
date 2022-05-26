
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useItems from '../../hooks/useItems';


const ManageProductAdmin = () => {
  const [products] = useItems()

  const Deliver = (id) => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success('Deleted Permanently')

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

            <th scope="col">Delete</th>



          </tr>
        </thead>
        <tbody>

          {
            products?.map((order, index) => <tr>
              <th scope="row">{`${index + 1}`}</th>
              <td>{order?.name}</td>
              <td>{order?.quantity}</td>
              <td>
                <button onClick={() => { Deliver(order?._id) }} className='btn btn-sm btn-danger'>X</button>
              </td>


            </tr>)
          }


        </tbody>
      </table>

    </div>
  );
};

export default ManageProductAdmin;