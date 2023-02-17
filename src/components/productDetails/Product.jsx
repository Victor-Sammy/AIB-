import React, { useEffect, useRef, useState } from 'react'
import '../../sass/pages/_product.scss'
import { NavLink, useParams } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import Review from '../Review'
//import axios from 'axios'
import Similar from "../Similar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import ProductGallery from "../productGallery/ProductGallery";
import Details from "./Details";
import Specs from "./Specs";

const buttons = [
  {
    display: '64GB',
  },
  {
    display: '128GB',
  },
  {
    display: '256GB',
  },
  {
    display: '512GB',
  },
  {
    display: '1TB',
  },
]

const Product = () => {
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState(true)
  const [addToWishlist, setAddToWishlist] = useState(false)

  //const dispatch = useDispatch()

  axios.defaults.withCredentials = true

  const handleClick = () => {
    console.log(productDetails.id)
    localStorage.setItem('cartProduct', JSON.stringify(productDetails))
    localStorage.setItem('ProductID', JSON.stringify(productDetails.id))
    // axios
    //   .post(
    //     `${API_URL}/ad/carts/343b6ac4-34fe-4ee6-a608-e1bdaaf61f69/items/`,
    //     {productDetails}
    //   )
    const cartId = localStorage.getItem('cartID')
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ product_id: productDetails.id, quantity: 1 }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`${API_URL}/ad/carts/${cartId}/items/`, requestOptions)
      .then((res) => {
        console.log(res.status, res.data)
        localStorage.setItem('qty', 1)
        if (res.status === 415) {
          console.log(res.data, res.message)
        }
        //navigate('/addProducts')
      })
      .catch((error) => {
        console.log(error.response, error.message)
      })
  }

  const optRef = useRef(null)
  const toggleOpt = () => optRef.current.classList.toggle('active__btnClass')
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/ad/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
      setLoading(false);
      console.log(data);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <>Loading...</>
  }

  const ShowProduct = () => {
    return (
      <section className='product'>
        <div className='back-to-prdt'>
          <div className='back-icon'>
            <RiArrowLeftSLine />
          </div>
          <div className='prdt-text'>Back to Products</div>
        </div>

        <div className='prdt-details'>
          <div>
            <div className='image-gallery'>
              <ProductGallery gallery={productDetails.images} />
            </div>
            <div className='review'>
              <Review id={id} />
            </div>
          </div>
          <div className='prdt-info'>
            <div className='prdt-title'>{productDetails.name}</div>
            <div className='prdt-des'></div>
            <div className='prdt-price'>NGN {productDetails.price}</div>
            <div className='product-btns'>
              <div className='cart-btn'>
                <div className='cart-icon'>
                  <svg
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2.5 2H4.24001C5.32001 2 6.17 2.93 6.08 4L5.25 13.96C5.11 15.59 6.39999 16.99 8.03999 16.99H18.69C20.13 16.99 21.39 15.81 21.5 14.38L22.04 6.88C22.16 5.22 20.9 3.87 19.23 3.87H6.32001'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.75 22C17.4404 22 18 21.4404 18 20.75C18 20.0596 17.4404 19.5 16.75 19.5C16.0596 19.5 15.5 20.0596 15.5 20.75C15.5 21.4404 16.0596 22 16.75 22Z'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.75 22C9.44036 22 10 21.4404 10 20.75C10 20.0596 9.44036 19.5 8.75 19.5C8.05964 19.5 7.5 20.0596 7.5 20.75C7.5 21.4404 8.05964 22 8.75 22Z'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.5 8H21.5'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='cart-text' onClick={handleClick}>
                  Add to Cart
                </div>
              </div>
              <div className='buy-btn'>Buy</div>
            </div>
            <div className='prod-rating'>
              <h2>5.0</h2>
              <p>(34k)</p>
            </div>
            <h1>Capacity</h1>
            <div className='capacity'>
              <div className='capacity-btn'>
                {buttons.map((btn, index) => (
                  <NavLink to='#' key={index} ref={optRef} onClick={toggleOpt}>
                    {btn.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <hr className='details-line' />
            <div>
              <div className='details-box'>
                <div className='details-card'>
                  <div
                    className='details-header'
                    onClick={() => setDetails(true)}
                  >
                    Details
                  </div>
                  {!!details && <div className='det-btn'></div>}
                </div>
                <div className='specs'>
                  <div
                    className='specs-header'
                    onClick={() => setDetails(false)}
                  >
                    Specifications
                  </div>
                  {!details && <div className='spec-btn'></div>}
                </div>
              </div>
              {details ? (
                <Details product={productDetails} />
              ) : (
                <Specs product={productDetails} />
              )}
            </div>
          </div>
          <div className='wish-icon'>
            <AiOutlineHeart
              key=''
              onClick={() => setAddToWishlist(!addToWishlist)}
              className={`wish-icn ${addToWishlist ? 'wish-active' : ''}`}
            />
          </div>
        </div>
        <Similar />
      </section>
    )
  }
  return (
    <section className='product'>
      <div>{loading ? <Loading /> : <ShowProduct />}</div>
    </section>
  )
}

export default Product
