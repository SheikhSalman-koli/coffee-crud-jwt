import React from 'react';
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const {user} = use(AuthContext)
    const [orders, setOrders] = useState()

    useEffect(()=>{
        axios(`http://localhost:3000/myorders/${user?.email}`)
        .then(res =>{
            setOrders(res?.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    // console.log(orders);
    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
        {
          orders?.map(coffee=> <OrderCard
              key={coffee._id}
              coffee={coffee}
              setOrders={setOrders}
              orders={orders}
          ></OrderCard> )
        }
      </div>
        </div>
    );
};

export default MyOrders;