
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'


function App() {
 

  return (
    <>
     <Header/>
     <Routes>
  
    
     <Route path='/' element={ <Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>
   
         </Routes>
    <Footer/>
    </>
  )
}

export default App
