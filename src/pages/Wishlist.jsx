import React from 'react'
import './Wishlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice';
import { removeFromWishlist } from '../Redux/wishlistSlice';

function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
 
 console.log('wishlist Array',wishlistArray);
 
  const dispatch=useDispatch()
  return (
    <>
    <div>
 {
  wishlistArray.length>0?
  
  <div className="image-grid first p-5">
  {wishlistArray.map((item)=>(
  
  <div className="img-card sec">
  <img src={item.image} alt="" height="250px" width="100%" style={{borderRadius:'10px'}} />
  <div className='description'>
      <span style={{ fontSize: '12px', color: 'green' }}>VegBox</span>
      <div className="price d-flex">
  
          <h5 style={{ fontSize: '16px' }} className='me-5'>{item.title}</h5>
          <h4 style={{ fontSize: '18px' }}> &#x20B9;{item.price}/kg</h4>
         <button onClick={()=>dispatch(addToCart(item))} style={{backgroundColor:'transparent'}}> <i class="fa-solid fa-cart-shopping cart"></i></button>
      </div>
      <button onClick={()=>dispatch(removeFromWishlist(item.id))}>
      <i class="fa-solid fa-trash-can heart"></i>
  </button>
  
  </div>
  </div>
  ))
  
  
  }            
              </div>
  :

  <div className='d-flex justify-content-center align-items-center empty' style={{paddingTop:'20%'}}>
 <img src='../assets/download.png'></img>
  
  </div>
                 
            
 }
 </div>
    </>
  )
}

export default Wishlist