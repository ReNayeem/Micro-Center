import React from 'react';
//style={{width:'64px',height:'64px'}}
import './Summary.css'

const Summary = () => {
  return (
    <div className='d-flex align-items-center justify-content-center trust flex-wrap'>
      <div className='p-5 m-2 trust2'>
        <i className="fa-solid fa-flag trust-icon"></i>
        <h1 className='trust-h1'>77</h1>
        <h3 className='trust-h3'>COUNTRIES</h3>
      </div>
      <div className='p-5 m-2 trust2'>
        <i className="fa-brands fa-product-hunt trust-icon"></i>
        <h1 className='trust-h1'>55+</h1>
        <h3 className='trust-h3'>Products</h3>
      </div>
      <div className='p-5 m-2 trust2'>
        <i className="fa-solid fa-arrow-up-wide-short trust-icon"></i>
        <h1 className='trust-h1'>999+</h1>
        <h3 className='trust-h3'>orders</h3>
      </div>
      <div className='p-5 m-2 trust2'>
        <i class="fa-solid fa-user-group trust-icon"></i>
        <h1 className='trust-h1'>207+</h1>
        <h3 className='trust-h3'>happy clients</h3>
      </div>
      <div className='p-5 m-2 trust2'>
        <i class="fa-solid fa-user-pen trust-icon"></i>
        <h1 className='trust-h1'>444+</h1>
        <h3 className='trust-h3'>feedbacks</h3>
      </div>
    </div>
  );
};

export default Summary;