import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Product from '../AllItems/Product';



const Buypage = () => {
  const [user, loading] = useAuthState(auth);

  const [productname, setProductsname] = useState('')
  const [price, setPrice] = useState(0)
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    setLoader(true);
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsname(data.name)
        setLoader(false);
        setPrice(data.price)
      });
  }, [id]);

  const checkCount = (e) => {
    e.preventDefault();
    const productQuantity = e.target.unit.value;
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Phone = e.target.phone.value;
    const Address = e.target.address.value;
    const totalPrice = parseInt(product.price * productQuantity)
    // console.log(totalPrice);

    const Order = { name: Name, quantity: productQuantity, email: Email, phone: Phone, address: Address, product: productname, price: price, totalPrice: totalPrice }

    if (productQuantity < product.minorder || productQuantity > product.quantity) {
      setCount(true);
      const again = window.confirm('Buy more units')
      console.log(again);
      if (again) {
        setCount(false);
      }
      else {
        toast.error(`You didn't fullfil our requirements`)
        navigate('/')
      }

    } else {
      toast.success('You are ready to serve');
      let quantityNumber = parseInt(product.quantity);
      let quantityNumberUp = parseInt(productQuantity);
      let updateTheQuantity = quantityNumber - quantityNumberUp
      let newQuantity = {
        _id: product._id,
        name: product.name,
        img1: product.img1,
        img2: product.img2,
        price: product.price,
        quantity: updateTheQuantity,
        minorder: product.minorder,
        description: product.description
      }
      const url2 = `http://localhost:5000/products/${id}`;
      fetch(url2, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newQuantity)
      })
        .then((res) => res.json())
        .then((data) => {

          setProducts(newQuantity);
          console.log('data success', data);

        });

      const url = 'http://localhost:5000/orders';
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(Order)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      e.target.reset()
      setCount(false);
    }


  };
  // const HandleAddItem = (e) => {
  //   e.preventDefault()

  //   const ratings = e.target.rating.value;
  //   if(ratings>0 && ratings<=5){
  //     const name = e.target.name.value;
  //   const username = e.target.username.value;
  //  const image = e.target.image.value

  //   const description= e.target.review.value;
  //   const data ={image,ratings,name,username,description}
  //   console.log(data);
  //   const url = 'http://localhost:5000/reviews';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  //     toast.success('Your review have been saved')
  //     e.target.reset()
  //   }else{
  //     toast.error('Enter rating between 1 to  5')
  //   }



  // };
  // if(loading){

  // }

  return (
    <div className="bg-info bg-gradient ">
      {loader === true ? <Loading></Loading> : ''}
      <div className="container p-2  mb-5 mt-3">
        <div class=" row  g-4">
          <div className="col col-sm-6 col-md-5">
            {<Product more={1} product={product}></Product>}
          </div>
          <div className='col mx-auto  col-sm-6 col-md-7 bg-success bg-gradient rounded-3 border border-warning border-5"'>
            <Form onSubmit={checkCount}>
              <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                <Form.Label>
                  <h3>Product Count</h3>
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  className="mb-3 "
                  value={user?.displayName}
                  readOnly
                />
                <Form.Control
                  name="email"
                  type="text"
                  className="mb-3 "
                  value={user?.email}
                  readOnly

                />
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  className="mb-3 "
                  required
                />
                <Form.Control
                  name="phone"
                  type="number"
                  placeholder="Enter your number"
                  className="mb-3 "
                  required
                />
                <Form.Control
                  name="unit"
                  type="number"
                  placeholder="Enter total unit number"
                  className="mb-3 "
                  required

                />
                <Form.Text className=" d-flex fw-bolder flex-row-reverse text-info">
                  You have to enter the value in Number.
                </Form.Text>
              </Form.Group>

              <Button
                disabled={count}
                className="btn btn-dark"
                type="submit"
              >
                Pay
              </Button>
            </Form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Buypage;
