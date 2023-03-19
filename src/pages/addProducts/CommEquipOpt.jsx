import React, { useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const CommEquipOpt = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Building Materials',
    'Doors and Windows',
    'Measuring Tools',
    'Medical Equipment',
    'Safety Equipment',
    'Sound Equipment',
    'Stage and Lightening equipment',
    'Stationery',
    'saloon equipment',
  ]

  selected === 'Building Materials' ? localStorage.setItem('subcatID', 65) : ''
  selected === 'Doors and Windows' ? localStorage.setItem('subcatID', 66) : ''
  selected === 'Measuring Tools' ? localStorage.setItem('subcatID', 67) : ''
  selected === 'Medical Equipment' ? localStorage.setItem('subcatID', 68) : ''
  selected === 'Safety Equipment' ? localStorage.setItem('subcatID', 69) : ''
  selected === 'Sound Equipment' ? localStorage.setItem('subcatID', 70) : ''
  selected === 'Stage and Lightening equipment'
    ? localStorage.setItem('subcatID', 71)
    : ''
  selected === 'Stationery' ? localStorage.setItem('subcatID', 72) : ''
  selected === 'saloon equipment' ? localStorage.setItem('subcatID', 73) : ''

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

export default CommEquipOpt
