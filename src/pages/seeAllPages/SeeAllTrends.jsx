import React, { useEffect, useState } from 'react'
import '../../sass/pages/_seeAllTrend.scss'
import { BsChevronLeft } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import TrendBanner from '../../assets/AIIB FLYER 1 1.png'

const SeeAllTrends = () => {
  const [trendData, setTrendData] = useState([])
  const [trendFilter, setTrendFilter] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      setTrendData(await response.clone().json())
      setTrendFilter(await response.json())
      setLoading(false)
      console.log(trendData)
    }
    fetchTrending()
  }, [])
  const Loading = () => {
    return <>Loading...</>
  }

  const ShowTrendingProducts = () => {
    return (
      <>
        <div className='trend-cats'>
          <select>
            <option>Category</option>
            <option>Fashion</option>
            <option>Animals</option>
            <option>Electronics</option>
            <option>Commercial Equip. & Tools</option>
            <option>Cars & Automobiles</option>
            <option>Furniture</option>
            <option>Laptops & Computers</option>
            <option>Phones & Tablets</option>
            <option>Other Categories</option>
          </select>
          <div className='search-all'>
            <input id='search-bar' name='text' placeholder='search' />
            <div className='search-icon'>
              <FiSearch className='s-icon' />
            </div>
          </div>
        </div>
        <div className='tr-products-display'>
          {trendFilter.map((trend) => {
            return (
              <div key={trend.id} className='tr-itm'>
                <Link className='arrival-link' to='#'>
                  <div className='tr-img'>
                    <img src={trend.image} alt='' />
                  </div>
                  <div className='tr-info'>
                    <div className='tr-cate-name'>
                      <h4>{trend.category}</h4>
                    </div>
                    <div className='tr-item-make'>
                      <h3>{trend.title}</h3>
                    </div>
                    <div className='tr-item-price'>
                      <h2>NGN {trend.price}</h2>
                    </div>
                    <div className='tr-item-rating'>
                      <span className='tr-starss'>⭐⭐⭐⭐⭐</span>
                      <span className='tr-numb-stars'>5.0 (34k)</span>
                    </div>
                    <div className='tr-wishlist-icn'>
                      <AiOutlineHeart />
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <section className='seeAll-trend'>
      <div className='top-header'>
        <div className='backk'>
          <div className='back-icon'>
            <BsChevronLeft />
          </div>
          <h1>Back</h1>
        </div>
        <div className='page-title'>Trending Now</div>
      </div>
      <div className='trend-banner'>
        <img src={TrendBanner} alt='' />
      </div>
      <div className='trend-products'>
        {loading ? <Loading /> : <ShowTrendingProducts />}
      </div>
    </section>
  )
}

export default SeeAllTrends
