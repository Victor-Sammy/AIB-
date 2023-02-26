import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import '../../sass/pages/_cart.scss'
import Recent from '../../components/Recent'

const CartItem = () => {
  //const dispatch = useDispatch()
  const cartId = localStorage.getItem('cartID')

  const [cartItem, setCartItem] = useState([])
  const [total, setTotal] = useState()

  useEffect(() => {
    cartResponse()
    response()
  }, [])

  const response = () => {
    axios.get(`/ad/carts/${cartId}/`).then((response) => {
      console.log(response.data)
      const data = response.data
      console.log(data)
      setTotal(data)
      const total = response.data.total
      console.log(total)
    })
  }

  const cartResponse = async () => {
    axios.get(`/ad/carts/${cartId}/items/`).then((response) => {
      console.log(response)
      const data = response.data
      setCartItem(data)
      console.log(data.results[0]?.quantity)
    })
  }

  if (cartItem.length < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
        <Recent />
      </section>
    )
  }

  return (
    <div>
      <h1 className='count' id='count'>
        my cart ({cartItem?.count})
      </h1>
      <div className='cart-container' id='cart-container'>
        <div className='cart-info' id='cart-info'>
          <div className='cart-items'>
            {cartItem?.results?.map((item) => {
              return (
                <div className='cart-item' id='cart-item' key={item?.id}>
                  <div className='cart-img' id='cart-img'>
                    <img src={item?.product?.images[0]?.image} alt='' />
                  </div>
                  <div className='make-des' id='make-des'>
                    <h1>{item?.product?.name}</h1>
                    <h3>{item?.product?.description}</h3>
                  </div>
                  <div>
                    <div className='cart-price' id='cart-price'>
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
                              response()
                            }, 200)
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
                              response()
                            }, 200)
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
                              response()
                            }, 200)
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
          <div className='complete-order' id='complete-order'>
            <h1>Cart Summary</h1>
            <hr className='cart-line' />
            <div className='total'>
              <div className='subtotal'>
                <h2>Subtotal</h2>
              </div>
              <div className='total-amount'>NGN {total?.total}</div>
            </div>
            <p>Deliveries fees not included</p>
            <hr className='cart-line2' />

            <div className='checkout-btn' onClick={() => navigate('/shipping')}>
              <div className='ck-btn-text'>
                <span>Proceed to checkout</span>
              </div>
              <div className='ck-arrw-icon'>
                <BsArrowRightShort />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
