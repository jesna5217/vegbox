import React, { useEffect, useState } from 'react'
import './items.css'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/wishlistSlice';
import { addToCart } from '../Redux/cartSlice';
function Items() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            const data = [
                {
                    id: 0,
                    title: 'Tomato',
                    price: 45,
                    image: "../assets/photo-red-fresh-tomato-blank-background.jpg"
                },
                {
                    id: 1,
                    title: 'Carrot',
                    price: 35,
                    image: "../assets/carrot.jpeg"
                }, {
                    id: 2,
                    title: 'Onion',
                    price: 25,
                    image: "../assets/onion.jpeg"
                }, {
                    id: 3,
                    title: 'Ginger',
                    price: 45,
                    image: "../assets/ginger.jpeg"
                }, {
                    id: 4,
                    title: 'Garlic',
                    price: 45,
                    image: "../assets/garlic.jpeg"
                },
                {
                    id: 5,
                    title: 'Carrot',
                    price: 35,
                    image: "../assets/carrot.jpeg"
                },
                {
                    id: 6,
                    title: 'Tomato',
                    price: 45,
                    image: "../assets/photo-red-fresh-tomato-blank-background.jpg"
                },
                {
                    id: 7,
                    title: 'Carrot',
                    price: 35,
                    image: "../assets/carrot.jpeg"
                }, {
                    id: 8,
                    title: 'Onion',
                    price: 25,
                    image: "../assets/onion.jpeg"
                }, {
                    id: 9,
                    title: 'Ginger',
                    price: 45,
                    image: "../assets/ginger.jpeg"
                }, {
                    id: 10,
                    title: 'Garlic',
                    price: 45,
                    image: "../assets/garlic.jpeg"
                },
                {
                    id: 11,
                    title: 'Onion',
                    price: 25,
                    image: "../assets/onion.jpeg"
                }
            ]
            setItems(data)
        }
        fetchData()
    }, [])
    console.log(items);
const dispatch=useDispatch();
  
    return (
        <>
          <div className='box'>
          <div>
                <p className='deals'>Top Deals For You</p></div>


            {
                items.length > 0?

            <div className="image-grid p-5">
{items.map((item)=>(

<div className="img-card">
<img src={item.image} alt="" height="250px" width="100%" style={{borderRadius:'10px'}} />
<div className='description'>
    <span style={{ fontSize: '12px', color: 'green' }} className='veg'>VegBox</span>
    <div className="price d-flex">

        <h5 style={{ fontSize: '16px' }} className='me-5'>{item.title}</h5>
        <h4 style={{ fontSize: '18px' }}> &#x20B9;{item.price}/kg</h4>
       <button onClick={()=>dispatch(addToCart(item))} style={{backgroundColor:'transparent'}}> <i class="fa-solid fa-cart-shopping cart"></i></button>
    </div>
    <button onClick={()=>dispatch(addToWishlist(item))}>
<i class="fa-solid fa-heart heart" ></i>
</button>

</div>
</div>
))


}            
            </div>
            :
            <p>No items found</p>
}




          </div>

        </>
    )
}

export default Items