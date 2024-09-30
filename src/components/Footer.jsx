import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router-dom';
function Footer() {
  const location =useLocation();

  // Define paths where you want to hide the footer
  const hideFooterPaths = ['/cart', '/wishlist'];

  // Only render the Footer if the current path is not in hideFooterPaths
  if (hideFooterPaths.includes(location.pathname)) {
    return null;
  }
  return (
   <footer>
 <div className='d-flex payment  '>
             
              <i className='fb' style={{ color: 'rgb(57, 87, 154)', fontSize: '25px' }} class="fa-brands fa-facebook me-2"></i>
              <div className='twitter me-2'><i class="fa-brands fa-twitter"></i></div>
              <i style={{ color: 'rgb(237, 56, 51)', fontSize: '25px' }} class="fa-brands fa-google-plus me-2"></i>
              <i class="fa-brands fa-pinterest me-2" style={{ fontSize: '25px', color: 'rgb(205,29,31' }}></i>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(85, 85, 85)' }}><i class="far fa-envelope" ></i></div>

              <div className='twitter me-2' style={{ backgroundColor: 'rgb(237, 56, 51)' }}><i class="fa-brands fa-youtube"></i></div>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(233, 27, 144)' }}><i class="fa-brands fa-instagram"></i></div>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(57, 125, 179)' }}><i class="fa-brands fa-linkedin-in"></i></div>

            </div>


   </footer>
  )
}

export default Footer