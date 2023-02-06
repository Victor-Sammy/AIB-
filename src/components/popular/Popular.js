import React, { useState, useEffect } from 'react'
import '../../sass/components/_sliders.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Popular = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setItems(data)
  }

  const slideLt = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRt = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <section className='popular'>
      <div className='popular-top'>
        <div className='pop-title' id='title'>
          Most Popular
        </div>
        <div className='pop-btn'>
          <div className='btn-text'>See All</div>
          <div className='arrw-icon'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='show'>
        <div className='left-arrw' onClick={slideLt}>
          <MdChevronLeft />
        </div>
        <div className='slide' id='slide'>
          {items.map((value) => {
            return (
              <div key={value.id} className='itm'>
                <NavLink to={`/products/${value.id}`} className='pop-link'>
                  <div className='imge'>
                    <img src={value.image} alt='' />
                  </div>
                  <div className='info'>
                    <div className='cate-name'>
                      <h4>{value.category}</h4>
                    </div>
                    <div className='item-make'>
                      <h3>{value.title}</h3>
                    </div>
                    <div className='item-price'>
                      <h2>NGN {value.price}</h2>
                    </div>
                    <div className='item-rating'>
                      <span className='starss'>⭐⭐⭐⭐⭐</span>
                      <span className='numb'>5.0 (34k)</span>
                    </div>
                    <div className='wishlist-icn'>
                      <AiOutlineHeart />
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          })}
        </div>
        <div className='right-arrw' onClick={slideRt}>
          <MdChevronRight />
        </div>
      </div>
    </section>
  )
}

export default Popular
