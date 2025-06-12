import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const OrderCard = ({ coffee ,orders, setOrders}) => {

  const { _id,name, price, quantity, photo, customerEmail } = coffee

  const handleDelet=()=>{
     axios.delete(`http://localhost:3000/cancelOrder/${_id}`)
     .then(res=>{
        // console.log(res.data);
        // if(res.data.deletedCount){
        // }
        const filtered = orders.filter(i=> i._id !== _id)
        setOrders(filtered)
     }).catch(err=>{
        console.log(err);
     })
  }

  return (
    <div className='card card-side space-x-6 bg-base-100 shadow-sm border-2'>
      <figure>
        <img src={photo} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>customerEmail: {customerEmail}</p>
        </div>
        <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
              <button onClick={handleDelet} className='btn join-item'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard;