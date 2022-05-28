import React from 'react';
import toast from 'react-hot-toast';
import useData from '../../Hooks/useData';
import PageTitle from '../Shared/PageTitle';
import Swal from 'sweetalert2';

const ManageProductAdmin = () => {
  const [products] = useData();

  const Deliver = (id) => {
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
        const url = `https://micro-center.herokuapp.com/products/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            console.log(data);
            toast.success('Product deleted');
          });
      }
    })
  };
  return (
    <div className="container">
      <div className="my-5 text-center">
        <h2>Admin</h2>
        <hr />
        <p>All Product are Here</p>
      </div>

      <div className='order-table'>
        <table class="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>

              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((order, index) => (
              <tr>
                <th scope="row">{`${index + 1}`}</th>
                <td>{order?.name}</td>
                <td>{order?.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      Deliver(order?._id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PageTitle title="Manage product"></PageTitle>
    </div>
  );
};

export default ManageProductAdmin;
