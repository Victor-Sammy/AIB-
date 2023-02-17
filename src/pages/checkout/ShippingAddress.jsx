import React, { useEffect, useState } from 'react'
import { BsArrowRightShort, BsCheck } from 'react-icons/bs'
import '../../sass/pages/_shipping.scss'
import { useDispatch, useSelector } from 'react-redux'
//import { getTotals } from '../../store/cartSlice'
import { Link } from 'react-router-dom'

const ShippingAddress = () => {
  const [isChecked, setIsChecked] = useState(false)

  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [province, setProvince] = useState()
  const [postalCode, setPostalCode] = useState()

  const { cartItems, cartTotalAmount } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className='shipping-page'>
      <div className='progress-bar'>
        <div className='progress1'>
          <BsCheck />
        </div>
        <div className='progress2'>
          <BsCheck />
        </div>
        <div className='progress3'>
          <BsCheck />
        </div>
      </div>
      <div className='progress'>
        <div className='sh-details'>Shipping details</div>
        <div className='py-details'>Payment details</div>
        <div className='sh-success'>Successful</div>
      </div>

      <div className='shipping--cart'>
        <div className='ship-details'>
          <div className='del-options'>
            <h1>Delivery Options</h1>
            <div className='home-del'>
              <input
                type='checkbox'
                id='home-del'
                name='home'
                value='home'
                checked={isChecked}
                onChange={handleOnChange}
              />
              Home Delivery
            </div>
            <div className='pickup'>
              <input type='checkbox' id='pickup' disabled={true} />
              Pick from point
            </div>
          </div>
          <form className='personal-info' onSubmit={submitHandler}>
            <div className='email'>
              <input
                type='email'
                value={email}
                required
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='phno'>
              <input
                type='number'
                value={phoneNumber}
                required
                placeholder='Phone number'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className='address'>
              <input
                type='text'
                value={address}
                required
                placeholder='Address line'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='city'>
              <input
                type='text'
                value={city}
                required
                placeholder='City'
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className='reg-postal'>
              <div className='province'>
                <input
                  type='text'
                  value={province}
                  required
                  placeholder='State/Province/Region'
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='text'
                  value={postalCode}
                  required
                  placeholder='Zip/Postal code'
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
            <Link to='/payment'>
              <div className='pay-btn' type='submit'>
                <div>
                  <h1>Proceed to Payment</h1>
                  <div className='py-arrow'>
                    <BsArrowRightShort />
                  </div>
                </div>
              </div>
            </Link>
          </form>
        </div>
        <div className='cart-summary'>
          {cartItems.map((cart) => {
            return (
              <div className='sh-cart-item' key={cart.id}>
                <div className='sh-cart-img'>
                  <img src={cart.image} alt='cart photos' />
                </div>
                <div className='sh-cart-info'>
                  <h1>{cart.title}</h1>
                  <p>{cart.description}</p>
                </div>
                <div>
                  <h1>NGN {cart.price}</h1>
                  <div className='sh-cart-quantity'>
                    <span>Qty: {cart.cartQuantity}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <hr />
          <div className='sh-cart-total'>
            <h1>Cart Summary</h1>
            <div className='sub-total'>
              <h2>Subtotal</h2>
              <h1>NGN {cartTotalAmount}</h1>
            </div>
            <p>Deliveries fees not included</p>
          </div>
          <button className='cart-update'>
            <Link to='/cart'>Update Cart</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShippingAddress
