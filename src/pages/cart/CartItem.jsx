import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import '../../sass/pages/_cart.scss'
import {
  removeFromCart,
  decreaseCart,
  increaseCart,
} from '../../store/cartSlice'

const CartItem = ({ id, image, title, price, cartQuantity }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className='cart-info'>
        <div className='cart-items'>
          <div className='cart-item'>
            <div className='cart-img'>
              <img src={image} alt='' />
            </div>
            <div className='make-des'>
              <h1>{title}</h1>
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, veniam.
              </h3>
            </div>
            <div>
              <div className='cart-price'>
                <h1>NGN {price}</h1>
              </div>
              <div className='quantity'>
                <span
                  className='decrease'
                  onClick={() => {
                    if (cartQuantity === 1) {
                      dispatch(removeFromCart(id))
                      return
                    }
                    dispatch(decreaseCart({ id }))
                  }}
                >
                  <AiOutlineMinus />
                </span>
                <span>{cartQuantity}</span>
                <span
                  className='increase'
                  onClick={() => {
                    if (cartQuantity >= 1) {
                      dispatch(increaseCart({ id }))
                    }
                  }}
                >
                  <AiOutlinePlus />
                </span>
              </div>
              <div
                className='delete-item'
                onClick={() => dispatch(removeFromCart(id))}
              >
                <RiDeleteBin5Fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
