import React, { useEffect, useState } from 'react'
import "../sass/pages/_productDetails.scss";
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Similar = () => {
  const [similar, setSimilar] = useState([])

  useEffect(() => {
    fetchSimilarProduct()
  }, [])

  const fetchSimilarProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setSimilar(data)
  }
  return (
    <section className='similar-products'>
      <div className='similar-top'>
        <div className='similar-title'>Similar Products</div>
        <div className='similar-btn'>
          <div className='s-btn-text'>See All</div>
          <div className='s-arrw-icon'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='similar-display' id='similar-display'>
        {similar.map((val) => {
          return (
            <div key={val.id} className='s-itm'>
              <Link className='similar-link' to=''>
                <div className='s-imge'>
                  <img src={val.image} alt='' />
                </div>
                <div className='s-info'>
                  <div className='s-cate-name'>
                    <h4>{val.category}</h4>
                  </div>
                  <div className='s-item-make'>
                    <h3>{val.title}</h3>
                  </div>
                  <div className='s-item-price'>
                    <h2>NGN {val.price}</h2>
                  </div>
                  <div className='s-item-rating'>
                    <span className='s-starss'>⭐⭐⭐⭐⭐</span>
                    <span className='s-numb-stars'>5.0 (34k)</span>
                  </div>
                  <div className='s-wishlist-icn'>
                    <AiOutlineHeart />
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Similar
