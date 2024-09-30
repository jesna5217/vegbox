import React from 'react'
import './Home.css'
import Items from './Items'
import Owl from '../pages/Owl'
import { Row } from 'react-bootstrap'
function Home() {
  return (
   <>
   
   <div className='background '>
   <marquee><p>50% off on all items on Sunday   &nbsp;&nbsp;&nbsp;|  &nbsp;&nbsp;&nbsp; Enjoy daily freshness on your door step &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp;  Fast delivery and cash on delivery options on every orders &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Order anything while you rest at your home.</p></marquee> 
    <img src="../assets/top-view-delicious-groceries-paper-bag.jpg" className='cover-image' alt="" height='600px'width='100%' />
 
  <div className='heading'><p className='anim'>WE BRING </p>
    <p className='anim one'>THE <span style={{color:'white'}}>STORE</span></p>
    <p className='anim two'>TO YOUR <span style={{color:'white'}}>DOOR</span> !!!</p></div>
  </div>

  <Items/>
  
  <div style={{padding:'100px',position:"relative"}} className='fruits'>
  <img src="../assets/sliced-fruits-berries-yellow-background.jpg" alt="" width="100%"  height="600px"/>
  <div className='heading2'><p className='anim'>SAVOUR THE  FLAVOUR OF</p>
  
    <p className='anim one'>FRESH <span style={{color:'white'}}>FRUITS</span> !!!</p></div>
  </div>
  <Owl/>
 
  </>
)
}

export default Home