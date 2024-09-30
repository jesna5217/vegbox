
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const cartArray = useSelector((state) => state.cartReducer);
  const [total,setTotal]=useState()
  console.log('cart array', cartArray);
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const handleCheckout=()=>{
    dispatch(emptyCart());
   alert('Your Order has been Successfully placed !!')
    navigate('/')
  }

  const getTotal=()=>{
    let sum=0;
    cartArray.forEach((item)=>{
      sum=sum+item.price;
    })
    setTotal(sum)
  }
  useEffect(()=>{
    getTotal()
  },cartArray)
  return (
   <>
<div style={{marginTop:'100px'}} className='p-5 d-flex justify-content-between'>
  {
    cartArray.length>0?
    <div className="row w-100">
    <div className="col-lg-6">
<table className='table shadow border'>
<thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Image</th>
  
            <th>Price</th>
            <th>Action</th>
  
          </tr>
        </thead>
        <tbody>
          {
            
              cartArray.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img src={item.image} alt="" height="50px"/></td>
                <td>₹{item.price}</td>
            <td><button  variant='outline-danger' onClick={()=>dispatch(removeFromCart(item.id))} ><i  class='fa-solid fa-trash' style={{color:'rgb(216, 96, 96)'}}></i></button></td>

               </tr>
              ))
            
            
          
          }
          </tbody>
</table>


    </div>


    <div className="col-lg-6">
<div className='border shadow p-5'>
<h3 className='text-primary text-center' style={{fontFamily:'Lucida',fontWeight:'600'}}>Cart Summary</h3>
<h5>Total number of products : <span className='text-warning fw-bolder'>{cartArray.length}</span></h5>
  <h5>Total Price : <span className='text-warning fw-bolder' >₹{total} </span></h5>

  <button className='btn btn-success rounded w-100' onClick={handleCheckout} style={{fontFamily:'Lucida'}} >CHECKOUT</button>
  
  </div>    </div>
  </div>:
  <div className='d-flex justify-content-center align-items-center flex-column is' style={{paddingTop:'5%',paddingLeft:'40%'}}>
 <img src="../assets/download (1).jpeg" alt="" />
 <p style={{color:'lightgrey',fontWeight:'600'}}>Your cart is empty</p>
 </div>
  }
</div>


      <ToastContainer/>
      </>
      )
}

      export default Cart