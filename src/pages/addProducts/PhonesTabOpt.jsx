import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const PhonesTabOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Mobile Phones',
    'Mobile Phones and Tablets Accessories',
    'Mobile Tablets',
    'Wristbands',
    'smart watches and trackers',
  ]

  selected === 'Mobile Phones' ? localStorage.setItem('subcatID', 20) : ''
  selected === 'Mobile Phones and Tablets Accessories'
    ? localStorage.setItem('subcatID', 21)
    : ''
  selected === 'Mobile Tablets' ? localStorage.setItem('subcatID', 22) : ''
  selected === 'Wristbands' ? localStorage.setItem('subcatID', 23) : ''
  selected === 'smart watches and trackers'
    ? localStorage.setItem('subcatID', 24)
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

export default PhonesTabOpt
