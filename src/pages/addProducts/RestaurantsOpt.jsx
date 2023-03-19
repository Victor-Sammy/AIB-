import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const Restaurantsopt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Farm equipment',
    'Farm supplement and seeds',
    'Food and Drinks',
    'Groceries',
    'Livestock',
    'Resturants',
  ]

  selected === 'Farm equipment' ? localStorage.setItem('subcatID', 14) : ''
  selected === 'Farm supplement and seeds'
    ? localStorage.setItem('subcatID', 15)
    : ''
  selected === 'Food and Drinks' ? localStorage.setItem('subcatID', 16) : ''
  selected === 'Groceries' ? localStorage.setItem('subcatID', 17) : ''
  selected === 'Livestock' ? localStorage.setItem('subcatID', 18) : ''
  selected === 'Resturants' ? localStorage.setItem('subcatID', 19) : ''

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

export default Restaurantsopt
