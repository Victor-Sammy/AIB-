import React, { useEffect, useState } from 'react'
import '../../sass/components/_sliders.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const TopStores = () => {
  const [storeLogo, setStoreLogo] = useState([])

  useEffect(() => {
    fetchLogo()
  })

  const fetchLogo = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=8')
    const logoData = await response.json()
    setStoreLogo(logoData)
  }
  return (
    <section className='top-stores'>
      <div className='stores-header'>
        <div className='stores-title' id='title'>
          Top Stores
        </div>
        <div className='stores-btn'>
          <div className='btn-store'>See All</div>
          <div className='arrw-ic'>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className='stores-display'>
        {storeLogo.map((item) => {
          return (
            <div className='store-logo'>
              <Link to=''>
                <img src={item.image} alt='' />
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TopStores
