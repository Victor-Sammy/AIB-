import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import '../../sass/pages/_cart.scss'
import env from '../../Api'
import getCart from './CartSt'

const CartItem = () => {
  //const dispatch = useDispatch()
  const cartId = localStorage.getItem('cartID')

  const [cartItem, setCartItem] = useState({})

  const { API_URL } = env

  useEffect(() => {
    cartResponse()
  }, [])

  const cartResponse = async () => {
    axios.get(`${API_URL}/ad/carts/${cartId}/items/`).then((response) => {
      console.log(response)
      const data = response.data
      setCartItem(data)
      console.log(data.results[0]?.quantity)
    })
  }

  return (
    <div>
      <h1 style={{ fontSize: '22px' }}>cart ({cartItem?.count})</h1>
      <div className='cart-info'>
        <div className='cart-items'>
          {cartItem?.results?.map((item) => {
            return (
              <div className='cart-item' key={item?.id}>
                <div className='cart-img'>
                  <img src={item?.product?.images[0]?.image} alt='' />
                </div>
                <div className='make-des'>
                  <h1>{item?.product?.name}</h1>
                  <h3>{item?.product?.description}</h3>
                </div>
                <div>
                  <div className='cart-price'>
                    <h1>NGN {item?.product?.price}</h1>
                  </div>
                  <div className='quantity'>
                    <span
                      className='decrease'
                      onClick={() => {
                        const checker =
                          item.quantity > 1 ? item.quantity - 1 : ''
                        const requestOptions = {
                          method: 'PATCH',
                          body: JSON.stringify({
                            quantity: checker,
                          }),
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        }
                        fetch(
                          `${API_URL}/ad/carts/${cartId}/items/${item.id}/`,
                          requestOptions
                        ).then((res) => {
                          console.log(res.status, res.data)
                          setTimeout(() => {
                            cartResponse()
                          }, 500)
                          if (res.status === 415) {
                            console.log(res.data, res.message)
                          }
                        })
                      }}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span>{item?.quantity}</span>
                    <span
                      className='increase'
                      onClick={() => {
                        console.log(item?.quantity + 1)
                        const requestOptions = {
                          method: 'PATCH',
                          body: JSON.stringify({
                            quantity: item?.quantity + 1,
                          }),
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        }
                        fetch(
                          `${API_URL}/ad/carts/${cartId}/items/${item.id}/`,
                          requestOptions
                        ).then((res) => {
                          console.log(res.status, res.data)
                          setTimeout(() => {
                            cartResponse()
                            getCart()
                          }, 500)
                          if (res.status === 415) {
                            console.log(res.data, res.message)
                          }
                        })
                      }}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <div
                    className='delete-item'
                    onClick={() => {
                      axios
                        .delete(
                          `${API_URL}/ad/carts/${cartId}/items/${item.id}/`,
                          item.id
                        )
                        .then((res) => {
                          console.log(res.status)
                          setTimeout(() => {
                            cartResponse()
                            getCart()
                          }, 500)
                        })
                    }}
                  >
                    <RiDeleteBin5Fill />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CartItem
