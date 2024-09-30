import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
const cart=useSelector((state)=>state.cartReducer)
  return (
    <header style={{position:'fixed',top:'0'}} >
        <Link to={'/'} style={{textDecoration:'none'}}>
        <a href="" class="logo"><i class="fa fa-shopping-basket"></i> VegBox</a>
        </Link>
        <nav class="navbar">
           <Link to={'/'}> <a>Home</a></Link>
            <a href="fetures">Features</a>
            <a href="products">Products </a>
            <a href="categories">Categories</a>
            <a href="reviews">Reviews</a>
            <Link to={'/blogs'}> <a >Blogs</a></Link>
        </nav>

        <div class="icons">
       
            <div class="fas fa-search" id="searchbtn"></div> 
             

           <Link to={'/cart'} style={{textDecoration:'none'}}>
           <Badge badgeContent={cart?.length} color="primary">
           <div class="fas fa-shopping-cart" id="cartbtn"></div>
    </Badge> </Link> 
    <Link to={'/wishlist'} style={{textDecoration:'none'}}>
           <Badge badgeContent={wishlist.length} color="primary">
           <div class="fa-solid fa-heart" id="cartbtn"></div>
    </Badge> </Link> 
            <div class="fas fa-user" id="login-btn"></div>  
         </div>
       
        </header>

  )
}

export default Header