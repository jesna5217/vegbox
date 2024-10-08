import React, { useEffect, useState } from 'react'
import './Owl.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import { addToWishlist } from '../Redux/wishlistSlice'
function Owl() {
    const [fruits,setFruits]=useState([])
useEffect(()=>{
 const fetchFruits=()=>{
    setFruits(values)
 }
 fetchFruits();
 console.log(fruits);
 
},[])
const dispatch=useDispatch();


    const values=[
        {
            id:12,
            title:"Strawberries imported 250gm",
            price:1299,
            image:"../assets/fruit1.jpg"
        },
        {
            id:13,
            title:"Blueberries Combo 125 Gm",
            price:999,
              image:"../assets/fruit2.jpg"
        },
        {
            id:14,
            title:"Dragon Fruit White  250gm",
            price:399,
              image:"../assets/fruit3.jpg"
        },
        {
            id:15,
            title:"Rasberries imported 250gm",
            price:599,
              image:"../assets/fr4.jpg"
        },
        {
            id:16,
            title:"Dragon Fruit White  250gm",
            price:899,
              image:"../assets/fr5.jpg"
        },
        {
            id:17,
            title:"Gooseberries imported 250gm",
            price:1199,
              image:"../assets/fr6.jpg"
        },
        {
            id:18,
            title:"Strawberries imported 500gm",
            price:1499,
              image:"../assets/fr7.jpg"
        },
        {
            id:19,
            title:"Rasberries imported 500gm",
            price:1299,
              image:"../assets/fr8.jpg"
        },
        {
            id:20,
            title:"Fresh Figs 450gm",
            price:699,
              image:"../assets/fr9.jpg"
        },
        {
            id:21,
            title:"Blueberries Combo 125 Gm",
            price:999,
              image:"../assets/fruit2.jpg"
        },
        {
            id:22,
            title:"Dragon Fruit White  250gm",
            price:399,
              image:"../assets/fruit3.jpg"
        },
        {
            id:23,
            title:"Rasberries imported 250gm",
            price:599,
              image:"../assets/fr4.jpg"
        }
    ]
  return (
   <div style={{padding:"0px 100px"}} className='exotic'>
<h1 style={{fontSize: '28px'}}className='text-center mb-5'>EXOTIC FRUITS</h1>

   {
    fruits.length>0?
    <div className='fruit-grid '>{
 fruits.map((item)=>(
<div className="fruit-card">
    <div className="boxing">
      <img src={item.image} alt="" height='200px' width='100%'/>
      <p>
    {item.title}</p></div>
          <button type="button" class="btn btn-light">MRP  &#x20B9; {item.price}</button>
          <button type="button" class="btn btn-dark add" onClick={()=>dispatch(addToCart(item))} >Add to cart </button>
          <button style={{backgroundColor:'transparent'}}><i className='fa-solid fa-heart like' style={{color:'rgb(216, 96, 96)'}} onClick={()=>dispatch(addToWishlist(item))}></i></button>
  </div>
 ))
}</div>
    :<p>NO ITEMS</p>
   }

</div>

  )
}

export default Owl