import React, { use, useState } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const CoffeeDetails = () => {

  const {user} = use(AuthContext)
  
  const data = useLoaderData()
  const coffee = data.data
  const {details, email,_id, likedBy, name, photo,price,taste,quantity,supplier} = coffee

  const [liked, setLiked] = useState(likedBy.includes(user?.email))
  const [likeCount, setLikeCount] = useState(likedBy.length)
  // console.log(_id);

  const hansleLikes =()=>{
    if(user?.email === email) return alert('Sorry, you cannot like your post')

      axios.patch(`http://localhost:3000/like/${_id}`,{
        email: user?.email
      }).then(res=>{
        // console.log(res.data);
        // console.log(res.data.liked);
        const isLiked = res.data?.liked
        setLiked(isLiked)

        setLikeCount(prev=> (isLiked ? prev + 1 : prev - 1))
      }) .catch(err=>{
        console.log(err);
      })
  }


  return (
    <div className='max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-8'>
        <div>
           <img src={photo} alt="" />
        </div>
        <div>
          <h1 className="text-3xl">{name}</h1>
          <p className="font-bold">{supplier}</p>
          <div className='space-x-4'>
             <span>Quentity: {quantity}</span><span>Taste: {taste}</span><span>Price: {price}</span>
          </div>
          <p>{details}</p>
          <p>added by: {email}</p>
          <p>likes: {likeCount}</p>
          <div className='space-x-4'>
            <button className='btn btn-primary'>Order</button>
            <button onClick={hansleLikes} className='btn btn-secondary'>
              {
                liked ? <AiFillDislike size={25}></AiFillDislike> : <AiFillLike size={25}></AiFillLike>
              }
              </button>
          </div>
        </div>
    </div>
  )
}

export default CoffeeDetails
