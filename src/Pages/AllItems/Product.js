import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product,more}) => {
  const navigate = useNavigate()
  const goBuyPage =()=>{
    navigate(`/buypage/${product._id}`)
  }
    
    const [des,setDes]= useState(product?.img1)
    const Changing=()=>{
        setDes(product?.img2)
        
          }
          const Reverse=()=>{
            setDes(product?.img1)
          }
          const minides = `${product?.description?.substring(0,30)}...`
        
    return (
        <div class="col">
        <div class="card h-100 border border-0 shadow  ">
            <div 
            onMouseEnter={Changing}
             onMouseLeave={Reverse}
            className='d-flex justify-content-center hoverme'>
          {
            more===1?<img
          
            src={product.img1} class="card-img-top p-1 w-75  " alt="..."/>:<img
          
            src={des} class="card-img-top p-1 w-75  " alt="..."/>
          }
          </div>
          <div class="card-body">
          <h5 class="card-title"> Product Name : {product.name}</h5>
            <p class="card-text"> Minimum Order : {product.minorder}</p>
            <p className='card-text'>Quantity : {product.quantity}</p>
            <p className='card-text'>Per Price : ${product.price}</p>
          {
              more===1?  <p class="card-text">Description : {product.description}</p>:  <p class="card-text">Description : {minides}</p>
          }
          </div>
        {
          more===1?'':(  <div   className="card-footer border border-0 bg-dark">
          <button onClick={goBuyPage} className="btn fw-bold fs-5 btn-outline-warning">BUY</button>
         </div>)
        }
        </div>
        
      </div>
    );
};

export default Product;