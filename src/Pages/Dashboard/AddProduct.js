import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const ProductAdd = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const img2 = e.target.img2.value;
    const img1 = e.target.img1.value
    const price = e.target.price.value
    const quantity = e.target.quantity.value
    const minorder = e.target.minorder.value
    const description = e.target.description.value;
    const data = { name, img1, img2, price, quantity, minorder, description }
    console.log(data);
    const url = 'http://localhost:5000/items';
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
    toast.success('Your product have been saved')
    e.target.reset()

  }
  return (
    <div className='my-5 container'>
      <div className='col container mx-auto  bg-success bg-gradient rounded-3 border border-warning border-5"'>
        <Form onSubmit={ProductAdd} >
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>
              <h3>ADD Product</h3>
            </Form.Label>
            <Form.Control
              name="name"
              type="text"
              className="mb-3 "
              required
              placeholder="Product Name"
            />
            <Form.Control
              name="img1"
              type="text"
              className="mb-3 "
              required
              placeholder="Enter image1 link"
            />
            <Form.Control
              name="img2"
              type="text"
              placeholder="Enter image2 link"
              className="mb-3 "
              required
            />
            <Form.Control
              name="price"
              type="number"
              placeholder="Enter product price"
              className="mb-3 "
              required
            />
            <Form.Control
              name="quantity"
              type="number"
              placeholder="Enter total quantity"
              className="mb-3 "
              required

            />
            <Form.Control
              name="minorder"
              type="number"
              placeholder="Enter Minimum buy value"
              className="mb-3 "
              required

            />
            <Form.Control
              name="description"
              type="text"
              className="mb-3 "
              required
              placeholder="Enter image1 link"
            />

          </Form.Group>

          <Button

            className="btn btn-dark my-5"
            type="submit"
          >
            Add Product
          </Button>
        </Form>

      </div>
    </div>
  );
};

export default AddProduct;