import React, { useEffect, useState } from 'react'
import '../sass/pages/_cart.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Recent = () => {
  const [recent, setRecent] = useState([])
  const [addToWishlist, setAddToWishlist] = useState([])

  useEffect(() => {
    fetchRecentProduct()
  }, [])

  const fetchRecentProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setRecent(data)
  }

  const slideLeft = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft + 500
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

      <div className='st-items-display' id='st-items-display'>
        <div className='left-arrow' id='left-arrow' onClick={slideLeft}>
          <MdChevronLeft />
        </div>
        <div className='slide' id='slide'>
          {recent.map((value) => {
            return (
              <div key={value.id} className='item' id='item'>
                <NavLink to={`/products/${value.id}`} className='trend-link'>
                  <div className='image' id='image'>
                    <img src={value.image} alt='' />
                  </div>
                  <div className='details' id='details'>
                    <div className='item-name' id='item-name'>
                      <span>{value.category}</span>
                    </div>
                    <div className='store-name' id='store-name'>
                      <span>Chicken Factory</span>
                    </div>
                    <div className='price' id='price'>
                      <span>NGN {value.price}</span>
                    </div>
                    <div className='rating' id='rating'>
                      <span className='stars'>⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </NavLink>
                <div className='wishlist-icon'>
                  <AiOutlineHeart
                    key={value.id}
                    onClick={() => setAddToWishlist(!addToWishlist)}
                    className={`heart-icon ${
                      addToWishlist ? 'heart-active' : ''
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-arrow' id='right-arrow' onClick={slideRight}>
          <MdChevronRight />
        </div>
      </div>
    </section>
  )
}

export default Recent
