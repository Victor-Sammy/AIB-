import React, { useEffect, useState } from 'react'
import '../../sass/pages/_seeAllProfile.scss'
import { BsChevronLeft } from 'react-icons/bs'
//import { AiOutlineHeart } from 'react-icons/ai'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FcSearch } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import axios from 'axios'
import StoreBanner from '../../assets/Frame 170.png'
//import { NavLink } from 'react-router-dom'
const SeeAllProfile = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchStoreItems = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      setData(await response.clone().json())
      setFilter(await response.json())
      setLoading(false)
      console.log(filter)
    }
    fetchStoreItems()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    return await axios
      .get(`https://fakestoreapi.com/products?q=${value}`)
      .then((response) => {
        setFilter(response.data)
        setValue('')
      })
      .catch((err) => console.log(err))
  }

  const slideLft = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRgt = () => {
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <section className='seeAllProfile'>
      <div className='top-header'>
        <div className='back-chev'>
          <div>
            <BsChevronLeft />
          </div>
          <div className='bk-text'>Back</div>
        </div>
        <h1 className='store-name'>Isaac Stores</h1>
      </div>
      <div className='store-banner'>
        <img src={StoreBanner} alt='' />
      </div>
      <div className='store-nav'>
        <input
          type='text'
          placeholder='search item ...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className='store-display-items'>
        {filter
          .filter((f) => {
            if (value === '') {
              return f
            } else if (f.title.toLowerCase().includes(value.toLowerCase())) {
              return f
            }
          })
          .map((f) => {
            return (
              <div key={f.id} className='n-itm'>
                <Link className='arrival-link' to=''>
                  <div className='n-imge'>
                    <img src={f.image} alt='' />
                  </div>
                  <div className='n-info'>
                    <div className='n-cate-name'>
                      <h4>{f.category}</h4>
                    </div>
                    <div className='n-item-make'>
                      <h3>{f.title}</h3>
                    </div>
                    <div className='n-item-price'>
                      <h2>NGN {f.price}</h2>
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

export default SeeAllProfile
