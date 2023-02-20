import React, { useRef, useState } from 'react'
import CartItem from './CartItem'
// import { useDispatch, useSelector } from 'react-redux'
// import { getTotals } from '../../store/cartSlice'
import '../../sass/pages/_cart.scss'
import Recent from '../../components/Recent'
import { useEffect } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
//import axios from 'axios'
//import { getCart } from './CartSt'

const Cart = () => {
  //const [cartItm, setCartItms] = useState([])
  // const navigate = useNavigate()

  const total = useRef()
  const cartId = localStorage.getItem('cartID')

  useEffect(() => {
    //response()
    // total.current = getCart()
    // console.log(total.current)
  }, [])

  // const response = () => {
  //   axios.get(`/ad/carts/${cartId}/`).then((response) => {
  //     console.log(response.data)
  //     const data = response.data
  //     console.log(data)
  //     setCartItms(data)
  //     const total = response.data.total
  //     console.log(total)
  //   })
  // }

  // if (cartItems.length < 1) {
  //   return (
  //     <section className='cart'>
  //       <header>
  //         <h2>Your bag</h2>
  //         <h4 className='empty-cart'>is currently empty</h4>
  //       </header>
  //       <Recent />
  //     </section>
  //   )
  // }

  return (
    <section className='shopping-cart' id='shopping-cart'>
      <div className='cart-container'>
        <div>
          <CartItem />
        </div>
      </div>
      <Recent />
    </section>
  )
}

export default Cart
