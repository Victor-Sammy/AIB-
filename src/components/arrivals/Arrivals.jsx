import React, { useState, useEffect } from 'react'
import '../../sass/pages/_home.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Arrivals = () => {
  const [newItems, setNewItems] = useState([])

  useEffect(() => {
    fetchArrivals()
  }, [])

  const fetchArrivals = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=10')
    const data = await response.json()
    setNewItems(data)
  }
  return (
    <section className='new-arrival'>
      <div className='arrival-top'>
        <div className='new-title'>New Arrivals</div>
        <div className='new-btn'>
          <div className='n-btn-text'>See All</div>
          <div className='n-arrw-icon'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='new-display' id='new-display'>
        {newItems.map((value) => {
          return (
            <div key={value.id} className='n-itm'>
              <Link className='arrival-link' to=''>
                <div className='n-imge'>
                  <img src={value.image} alt='' />
                </div>
                <div className='n-info'>
                  <div className='n-cate-name'>
                    <h4>{value.category}</h4>
                  </div>
                  <div className='n-item-make'>
                    <h3>{value.title}</h3>
                  </div>
                  <div className='n-item-price'>
                    <h2>NGN {value.price}</h2>
                  </div>
                  <div className='n-item-rating'>
                    <span className='n-starss'>⭐⭐⭐⭐⭐</span>
                    <span className='n-numb-stars'>5.0 (34k)</span>
                  </div>
                  <div className='n-wishlist-icn'>
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

export default Arrivals
