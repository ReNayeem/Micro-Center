
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


import Order from './Order';


const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/individual?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }
        , [user, order])
    return (

        <div>

            <div className='my-5 text-center'>

                <h6 className=''>{user?.email}</h6>
                <h1 className=''>ORDERED ITEMS</h1>
            </div>

            <table class="table OverflowX table-borderless table-info container border mt-5 shadow border-warning">
                <thead className='table-dark'>
                    <tr>

                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pay</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order.map((order, index) => <Order index={index} order={order}></Order>)
                    }


                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;