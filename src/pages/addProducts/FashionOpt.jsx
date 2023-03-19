import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const FashionOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Bags',
    'Mens fashion',
    'Shoes',
    'Watches',
    'Womens fashion',
    'clothing Accessories',
    'wedding wears',
  ]

  selected === 'Bags' ? localStorage.setItem('subcatID', 47) : ''
  selected === 'Mens fashion' ? localStorage.setItem('subcatID', 48) : ''
  selected === 'Shoes' ? localStorage.setItem('subcatID', 49) : ''
  selected === 'Watches' ? localStorage.setItem('subcatID', 50) : ''
  selected === 'Womens fashion' ? localStorage.setItem('subcatID', 51) : ''
  selected === 'clothing Accessories'
    ? localStorage.setItem('subcatID', 52)
    : ''
  selected === 'wedding wears' ? localStorage.setItem('subcatID', 53) : ''

  return (
    <section className='addCategory'>
      <div className='dropdown' id='dropdown'>
        <div
          style={{ background: '#f2f4f7' }}
          className='dropdown-btn'
          onClick={(e) => setIsActive(!isActive)}
        >
          {selected}
          <span>
            {' '}
            <AiOutlineCaretDown />
          </span>
        </div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option)
                  setIsActive(false)
                  localStorage.setItem('sub-cat', option)
                }}
                className='dropdown-item'
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {selected && (
        <NavLink to='/addProduct' className='nxt-btn'>
          <div className='next-btn' id='next-btn'>
            <h1>Next</h1>
            <div>
              <BsArrowRightShort />
            </div>
          </div>
        </NavLink>
      )}
    </section>
  )
}

export default FashionOpt
