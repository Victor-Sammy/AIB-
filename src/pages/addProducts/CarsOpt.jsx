import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const CarsOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Cars',
    'Busses',
    'Motorcycle',
    'Trucks and Trailers',
    'Vehicle parts and Accessories',
  ]

  selected === 'Cars' ? localStorage.setItem('subcatID', 74) : ''
  selected === 'Busses' ? localStorage.setItem('subcatID', 75) : ''
  selected === 'Motorcycle' ? localStorage.setItem('subcatID', 76) : ''
  selected === 'Trucks and Trailers' ? localStorage.setItem('subcatID', 77) : ''
  selected === 'Vehicle parts and Accessories'
    ? localStorage.setItem('subcatID', 78)
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

export default CarsOpt
