import React from 'react';
import toast from 'react-hot-toast';
import PageTitle from '../Shared/PageTitle';
import './Dashboard.css'

const AddProduct = () => {
  const ProductAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img1 = e.target.img1.value;
    const rated = e.target.rated.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const processor = e.target.processor.value;
    const minorder = e.target.minorder.value;
    const gpu = e.target.gpu.value;
    const description = e.target.description.value;
    const data = { name, img1, processor, gpu, rated, price, quantity, minorder, description };
    console.log(data);
    const url = 'https://micro-center.herokuapp.com/products';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    toast.success('Your product have been added');
    e.target.reset();
  };
  return (
    <div>
      <div className="user-profile-container mb-5 mx-auto ">

        <div className='p-5'>
          <h2>Add</h2>
          <hr className='w-75' />
          <p>Add new product here</p>
        </div>
        <form onSubmit={ProductAdd}>

          <div class="mb-3">
            <input name="name"
              type="text"
              placeholder="*Product Name"
              required class="form-control" />
          </div>
          <div class="mb-3">
            <input
              name="img1"
              type="text"

              placeholder="Enter image link" class="form-control" />
          </div>
          <div class="mb-3">
            <input name="price"
              type="number"
              placeholder="*Enter product price"
              required class="form-control" />
          </div>
          <div class="mb-3">
            <input name="quantity"
              type="number"
              placeholder="*Enter total quantity"
              required class="form-control" />
          </div>
          <div class="mb-3">
            <input name="minorder"
              type="number"
              placeholder="*Enter Minimum buy value"
              required class="form-control" />
          </div>
          <div class="mb-3">
            <textarea name="description"
              type="text"
              placeholder="Product Description in 1 sentence" class="form-control" />
          </div>
          <div class="mb-3">
            <input name="processor"
              type="text"
              placeholder="Minimum Processor supported model name" class="form-control" />
          </div>
          <div class="mb-3">
            <input name="gpu"
              type="text"
              placeholder="Minimum GPU supported model name" class="form-control" />
          </div>
          <div class="mb-3">
            <input name="rated"
              type="text"
              placeholder="This product best rated for" class="form-control" />
          </div>
          <button className='submit-button' type='submit'>ADD PRODUCT</button>
        </form>
      </div>
      <PageTitle title="Add product"></PageTitle>
    </div>
  );
};

export default AddProduct;
