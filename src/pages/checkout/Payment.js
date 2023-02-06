import React, { useEffect } from 'react'
import '../../sass/pages/_payment.scss'
import useForm from './useForm'
import { BsArrowRightShort, BsCheck } from 'react-icons/bs'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles.scss'
import { Alert, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals } from '../../store/cartSlice'

const Payment = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm()

  const { cartItems, cartTotalAmount } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems, dispatch])

  return (
    <section className='paymentMethod'>
      <div className='py-progress-bar'>
        <div className='py-progress1'>
          <BsCheck />
        </div>
        <div className='py-progress2'>
          <BsCheck />
        </div>
        <div className='py-progress3'>
          <BsCheck />
        </div>
      </div>
      <div className='py-progress'>
        <div className='py-sh-details'>Shipping details</div>
        <div className='py-py-details'>Payment details</div>
        <div className='py-success'>Successful</div>
      </div>
      <div className='delivery-opt'>
        <div className='billing-del'>
          <div className='billing-add'>
            <span className='location-icon'>
              <img src={require('../../assets/Vector.png')} alt='location' />
            </span>
            <span>Billing & Delivery Address</span>
          </div>
          <div className='address-txt'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            pariatur.
          </div>
        </div>
        <div className='pickup-point'>
          <div className='p-p'>
            <div className='circle-check'>
              <BsCheck />
            </div>
            <h1>Pickup Point</h1>
          </div>
          <p>Marina Lagos Island</p>
        </div>
      </div>
      <div className='pay-cartItems'>
        <div className='formDiv'>
          <div className='creditCard'>
            <Cards
              cvc={values.cardSecurityCode}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
          </div>
          <div className='card-types'>
            <div>
              <img
                src={require('../../assets/Mastercard-logo.png')}
                alt='mastercard'
              />
            </div>
            <div>
              <img src={require('../../assets/Paga Logo 1.png')} alt='paga' />
            </div>
            <div className='paystack'>
              <img
                src={require('../../assets/Paystack Logo 1.png')}
                alt='paystack'
              />
              <p>Paystack</p>
            </div>
            <div>
              <img
                src={require('../../assets/Barter Logo 1.png')}
                alt='barter'
              />
            </div>
            <div>
              <img src={require('../../assets/Visa_Logo.png')} alt='visa' />
            </div>
          </div>
          <form onSubmit={handleSubmit} className='card-detailss'>
            <div className='card-name'>
              <input
                type='text'
                id='cardName'
                data-testid='cardName'
                name='cardName'
                placeholder='Name on Card'
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
                required
              />
            </div>
            <div className='card-num'>
              <input
                type='number'
                id='cardNumber'
                data-testid='cardNumber'
                name='cardNumber'
                placeholder='Card number'
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
                required
              />
            </div>
            <div className='exp-cvv'>
              <div className='expiry-date'>
                <input
                  type='text'
                  id='cardExpiration'
                  data-testid='cardExpiration'
                  name='cardExpiration'
                  placeholder='MM/YY'
                  value={values.cardExpiration}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cexp}
                  required
                />
              </div>
              <div className='cvv'>
                <input
                  type='number'
                  id='cardSecurityCode'
                  data-testid='cardSecurityCode'
                  name='cardSecurityCode'
                  placeholder='Security Code'
                  value={values.cardSecurityCode}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.ccvc}
                  required
                />
              </div>
            </div>
            <Button
              className='pay-btn'
              id='validateButton'
              data-testid='validateButton'
              type='submit'
            >
              <div>
                <h1>Checkout</h1>
                <div className='py-arrow'>
                  <BsArrowRightShort />
                </div>
              </div>
            </Button>
          </form>
        </div>
        <Alert
          id='alertMessage'
          data-testid='alertMessage'
          variant={errors.variant}
          show={errors.show}
        >
          {errors.message}
        </Alert>

        <div className='cart-sum'>
          {cartItems.map((cart) => {
            return (
              <div className='py-cart-item' key={cart.id}>
                <div className='py-cart-img'>
                  <img src={cart.image} alt='cart photos' />
                </div>
                <div className='py-cart-info'>
                  <h1>{cart.title}</h1>
                  <p>{cart.description}</p>
                </div>
                <div>
                  <h1>NGN {cart.price}</h1>
                  <div className='py-cart-quantity'>
                    <span>Qty: {cart.cartQuantity}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <hr />
          <div className='py-cart-total'>
            <h1>Cart Summary</h1>
            <div className='sub-tot'>
              <h2>Subtotal</h2>
              <h1>NGN {cartTotalAmount}</h1>
            </div>
            <p>Deliveries fees not included</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
