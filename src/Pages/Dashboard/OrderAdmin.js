import React from 'react';
import useOrders from '../../Hooks/useOrders';
import PageTitle from '../Shared/PageTitle';
import Swal from 'sweetalert2';

const OrderAdmin = ({ refetch, paid, _id }) => {
  const [orders] = useOrders();

  const Deliver = (id) => {
    fetch(`https://micro-center.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
    Swal.fire({
      title: 'Shipped',
      text: "This product is set to shipped. Please reload to see the update.",
      icon: 'success',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch();
      })
  };
  return (
    <div className="container">
      <div className="my-5 text-center">
        <h2>Admin</h2>
        <hr />
        <p className="">Customers Ordered Products</p>
        <p className="text-danger">Please refresh the page after clicking cancel or deliver button to see the update</p>
      </div>

      <div className='order-table'>
        <table class="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr>
                <th scope="row">{`${index + 1}`}</th>
                <td>{order?.product}</td>
                <td className='text-success fw-bold'>{order?.name}</td>
                <td>{order?.address}</td>
                <td>{order?.phone}</td>
                <td>{order?.quantity}</td>
                <td>{order?.quantity * order?.price}</td>
                <td>
                  {order.paid ? <>
                    {
                      order.status ? <p className='text-success text-uppercase fw-bold'>Shipped</p> : <button className="btn btn-xs mb-2 btn-success" onClick={() => Deliver(order?._id)}>DELIVER</button>
                    }
                  </> : (
                    <p>
                      Payment pending
                    </p>
                  )}
                  <br />
                  <button disabled={order?.paid} onClick={(id) => {
                    console.log(order.product);
                    Swal.fire({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(
                          'Deleted!',
                          'This product has been deleted. Please refresh the page to see the update.',
                          'success'
                        )
                        fetch(`https://micro-center.herokuapp.com/orders/${order._id}`, {
                          method: 'DELETE',
                          headers: {
                            "content-type": 'application/json'
                          },
                        }).then(res => res.json())
                          .then(data => {
                            console.log(data)
                            refetch();
                            order.filter(data => data?.order._id !== id)

                          })
                      }
                    })
                  }} type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                    CANCEL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PageTitle title="Manage order"></PageTitle>
    </div>
  );
};

export default OrderAdmin;
