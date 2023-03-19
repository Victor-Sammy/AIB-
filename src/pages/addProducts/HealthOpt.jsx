import React, { useEffect, useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const HealthOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Body Accessories',
    'Hair Accessories',
    'MakeUps',
    'Skincare',
    'Spa and BeautyClinic',
    'Supplements and vitamins',
  ]

  selected === 'Body Accessories' ? localStorage.setItem('subcatID', 41) : ''
  selected === 'Hair Accessories' ? localStorage.setItem('subcatID', 42) : ''
  selected === 'MakeUps' ? localStorage.setItem('subcatID', 43) : ''
  selected === 'Skincare' ? localStorage.setItem('subcatID', 44) : ''
  selected === 'Spa and BeautyClinic'
    ? localStorage.setItem('subcatID', 45)
    : ''
  selected === 'Supplements and vitamins'
    ? localStorage.setItem('subcatID', 46)
    : ''

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

export default HealthOpt
