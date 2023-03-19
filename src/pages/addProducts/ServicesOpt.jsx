import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const ServicesOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Automobile Services',
    'Building Services',
    'Cleaning Services',
    'Delivery Services',
    'Electricians',
    'Errand Boy',
    'Hair Services',
    'Health Services',
    'Nails service',
    'Party and Catering Services',
    'Security Services',
  ]

  selected === 'Automobile Services' ? localStorage.setItem('subcatID', 1) : ''
  selected === 'Building Services' ? localStorage.setItem('subcatID', 2) : ''
  selected === 'Cleaning Services' ? localStorage.setItem('subcatID', 3) : ''
  selected === 'Delivery Services' ? localStorage.setItem('subcatID', 4) : ''
  selected === 'Electricians' ? localStorage.setItem('subcatID', 5) : ''
  selected === 'Errand Boy' ? localStorage.setItem('subcatID', 6) : ''
  selected === 'Hair Services' ? localStorage.setItem('subcatID', 7) : ''
  selected === 'Health Services' ? localStorage.setItem('subcatID', 8) : ''
  selected === 'Nails service' ? localStorage.setItem('subcatID', 9) : ''
  selected === 'Party and Catering Services'
    ? localStorage.setItem('subcatID', 10)
    : ''
  selected === 'Security Services' ? localStorage.setItem('subcatID', 11) : ''

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

export default ServicesOpt
