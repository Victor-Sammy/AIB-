import React from 'react'
import { WalletInput } from '../wallet-input/wallet-input'
import { WalletButton } from '../wallet-button/wallet-button'
import { BsXCircle } from 'react-icons/bs'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import 'swiper/css/manipulation'
import { FcSimCardChip } from 'react-icons/fc'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { login } from "../../../store/userSlice";
import 'swiper/css'
import './deposit.scss'

const Deposit = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [amount, setAmount] = useState('')
  const [cardNumError, setCardNumError] = useState(false)
  const [cardNameError, setCardNameError] = useState(false)
  const [amountError, setAmountError] = useState(false)

  const dispatch = useDispatch()

  function handleChange(e) {
    const { name, value } = e.target

    switch (name) {
      case 'cardNum':
        setCardNum(value)
        break
      case 'cardName':
        setCardName(value)
        break
      case 'amount':
        setAmount(value)
        break
      default:
        break
    }
  }
  const handleClearNum = () => {
    setCardNum('')
  }
  const handleClearName = () => {
    setCardName('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let formFields = ['cardNum', 'cardName', 'amount']

    let isValid = true

    // dispatch(
    //   login({
    //     cardNumber: cardNum,
    //     cardName: cardName,
    //     amount: amount,
    //   })
    // );

    formFields.forEach((field) => {
      isValid = validateField(field) && isValid
    })

    if (isValid) {
      console.log(cardNum)
      console.log(cardName)
      console.log(amount)

      setCardNum('')
      setCardName('')
      setAmount('')
    }
  }

  function validateField(name) {
    let isValid = false

    if (name === 'cardNum') isValid = validateCardNum()
    else if (name === 'cardName') isValid = validateCardName()
    else if (name === 'amount') isValid = validateAmount()

    return isValid
  }

  function validateAmount() {
    let amountError = false
    const value = amount
    if (value.trim() === '') amountError = true

    setAmountError(amountError)
    return amountError === false
  }

  function validateCardName() {
    let cardNameError = false
    const value = cardName
    if (value.trim() === '') cardNameError = true

    setCardNameError(cardNameError)
    return cardNameError === false
  }

  function validateCardNum() {
    let cardNumError = false
    const value = cardNum
    if (value.trim() === '') cardNumError = true

    setCardNumError(cardNumError)
    return cardNumError === false
  }

  const act1 = amount.length > 1 && cardNum.length > 1

  const isActive = act1 && cardName.length > 1

  const cardImage = [
    {
      id: 1,
      Bank: 'Union',
      cardNumber: '5555 4444 3333  1124',
      cardName: 'John Rupture',
    },
    {
      id: 2,
      Bank: 'Zenith',
      cardNumber: '5555 4444 3333 2234',
      cardName: 'John Toast ',
    },
    {
      id: 3,
      Bank: 'Ecobank',
      cardNumber: '5555 4444 3333   3344',
      cardName: 'John Baptist',
    },
  ]

  const swiperSlide = useSwiperSlide()

  function handleFill(item) {
    setCardNum(item.cardNumber)

    setCardName(item.cardName)
  }

  return (
    <section className='deposit-page'>
      <div className='deposit-component'>
        <div className='deposit-pt'>Deposit</div>

        <div className='imgslider'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.3}
            // grabCursor={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className='card-swiper'
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {cardImage.map((item) => (
              <SwiperSlide
                key={item.id}
                className='slide'
                onClick={() =>
                  swiperSlide ? console.log('active') : handleFill(item)
                }
              >
                <div className='cardNumber'>
                  <span>
                    {' '}
                    <FcSimCardChip />{' '}
                  </span>
                  <span>**** **** **** {item.cardNumber.slice(-4)}</span>
                </div>
                <div className='cardHolder'>
                  <span>Card Holder</span>
                  <span>{item.cardName}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='deposit-ph'>Card Details</div>

        <form onSubmit={handleSubmit}>
          <div className='fields'>
            <WalletInput
              label='Card Number'
              icon={<BsXCircle />}
              name='cardNum'
              value={cardNum}
              clear={handleClearNum}
              handleChange={handleChange}
              error={cardNumError}
            />
            <WalletInput
              label='Account Name'
              icon={<BsXCircle />}
              name='cardName'
              value={cardName}
              clear={handleClearName}
              handleChange={handleChange}
              error={cardNameError}
            />
            <WalletInput
              label='Amount'
              icon='NGN'
              name='amount'
              value={amount}
              handleChange={handleChange}
              error={amountError}
            />
          </div>
          <div className='w-btn'>
            <WalletButton type='submit' disabled={!isActive}>
              Top Up Now
            </WalletButton>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Deposit
