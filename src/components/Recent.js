import React, { useEffect, useState } from 'react'
import '../sass/pages/_cart.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Recent = () => {
  const [recent, setRecent] = useState([])

  useEffect(() => {
    fetchRecentProduct()
  }, [])

  const fetchRecentProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setRecent(data)
  }
  return (
    <section className='recent-products'>
      <div className='recent-top'>
        <div className='recent-title'>Recently Viewed</div>
        <div className='recent-btn'>
          <div className='rv-btn-text'>See All</div>
          <div className='rv-arrw-icon'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='recent-display' id='recent-display'>
        {recent.map((data) => {
          return (
            <div key={data.id} className='rv-itm'>
              <Link className='recent-link' to=''>
                <div className='rv-imge'>
                  <img src={data.image} alt='' />
                </div>
                <div className='rv-info'>
                  <div className='rv-cate-name'>
                    <h4>{data.category}</h4>
                  </div>
                  <div className='rv-item-make'>
                    <h3>{data.title}</h3>
                  </div>
                  <div className='rv-item-price'>
                    <h2>NGN {data.price}</h2>
                  </div>
                  <div className='rv-item-rating'>
                    <span className='rv-starss'>⭐⭐⭐⭐⭐</span>
                    <span className='rv-numb-stars'>5.0 (34k)</span>
                  </div>
                  <div className='rv-wishlist-icn'>
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

export default Recent
