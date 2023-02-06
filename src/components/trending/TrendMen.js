import React, { useState, useEffect } from 'react'
import '../../sass/components/_sliders.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const TrendMen = () => {
  const [trendItems, setTrendItems] = useState([])

  useEffect(() => {
    fetchTrendMen()
  })

  const fetchTrendMen = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setTrendItems(data)
  }

  const slideL = () => {
    var slider = document.getElementById('sliderr')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideR = () => {
    var slider = document.getElementById('sliderr')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <section className='trend-top'>
      <div className='trend-men-top'>
        <div className='t-m-title' id='title'>
          Trending in Men
        </div>
        <div className='t-m-btn'>
          <div className='t-m-btn-text'>See All</div>
          <div className='t-m-arrw-icon'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='t-m-show'>
        <div className='t-m-left-arrw' onClick={slideL}>
          <MdChevronLeft />
        </div>
        <div className='sliderr' id='sliderr'>
          {trendItems.map((value) => {
            return (
              <div key={value.id} className='t-m-item'>
                <Link to='' className='trendmen-link'>
                  <div className='t-m-image'>
                    <img src={value.image} alt='' />
                  </div>
                  <div className='t-m-info'>
                    <div className='t-m-cate-name'>
                      <h4>{value.category}</h4>
                    </div>
                    <div className='t-m--make'>
                      <h3>{value.title}</h3>
                    </div>
                    <div className='t-m-price'>
                      <h2>NGN {value.price}</h2>
                    </div>
                    <div className='t-m--rating'>
                      <span className='t-m-stars'>⭐⭐⭐⭐⭐</span>
                      <span className='stars-numb'>5.0 (34k)</span>
                    </div>
                    <div className='t-m-wishlist-icn'>
                      <AiOutlineHeart />
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <div className='t-m-right-arrw' onClick={slideR}>
          <MdChevronRight />
        </div>
      </div>
    </section>
  )
}

export default TrendMen
