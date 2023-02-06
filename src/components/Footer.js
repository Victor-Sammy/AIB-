import React from 'react'
import '../sass/components/_footer.scss'
import { IoIosArrowForward } from 'react-icons/io'
import Logo from '../assets/AIB logo 2.png'
import Logo2 from '../assets/AIB logo.png'
import AppStore from '../assets/appstore.png'
import GooglePlay from '../assets/gplay.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='foot-top'>
        <div className='f-logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='newsletter'>
          <h1>New to AIB?</h1>
          <p>Subscribe to our newsletter to get latest updates</p>
          <div className='input'>
            <input type='text' placeholder='Enter your email' />
            <span>
              <div className='send-icon'>
                <IoIosArrowForward />
              </div>
            </span>
          </div>
        </div>
        <div className='download'>
          <div className='down-top'>
            <div className='logo-img'>
              <img src={Logo2} alt='' />
            </div>
            <div className='download-text'>
              <h1>Download AIB App for free</h1>
              <p>And get the best shopping experience!</p>
            </div>
          </div>
          <div className='download-btns'>
            <button className='btn-1'>
              <Link to=''>
                <img src={AppStore} alt='' />
              </Link>
            </button>
            <button className='btn-2'>
              <Link to=''>
                <img src={GooglePlay} alt='' />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
