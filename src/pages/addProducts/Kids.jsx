import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const Kids = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Babies Accessories',
    'Baby strollers',
    'Children and babies Clothing',
    'Children and babies Shoes',
    'Children and baby care',
    "Children's furniture",
    'Toys',
  ]

  selected === 'Babies Accessories' ? localStorage.setItem('subcatID', 27) : ''
  selected === 'Baby strollers' ? localStorage.setItem('subcatID', 28) : ''
  selected === 'Children and babies Clothing'
    ? localStorage.setItem('subcatID', 29)
    : ''
  selected === 'Children and babies Shoes'
    ? localStorage.setItem('subcatID', 30)
    : ''
  selected === 'Children and baby care'
    ? localStorage.setItem('subcatID', 31)
    : ''
  selected === "Children's furniture"
    ? localStorage.setItem('subcatID', 32)
    : ''
  selected === 'Toys' ? localStorage.setItem('subcatID', 33) : ''

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

export default Kids
