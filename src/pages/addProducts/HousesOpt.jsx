import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const HousesOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Event center renting',
    'Hotel Renting',
    'House Renting and sales',
  ]

  selected === 'Event center renting'
    ? localStorage.setItem('subcatID', 34)
    : ''
  selected === 'Hotel Renting' ? localStorage.setItem('subcatID', 35) : ''
  selected === 'House Renting and sales'
    ? localStorage.setItem('subcatID', 36)
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

export default HousesOpt
