import React, { useEffect, useState } from 'react'
import '../../../sass/pages/addCategory.scss'
import { NavLink } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineCaretDown } from 'react-icons/ai'

const AddElectronicSub = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Audio and Music equipment',
    'Computer Accessories',
    'Electrical equipment',
    'Electronics',
    'Electronics Accessories',
    'HeadPhones',
    'Kitchen Appliances',
    'Photos and video cameras',
    'Tv and DVD equipment',
    'Videogames and Accessories',
    'printers scanners',
  ]

  selected === 'Audio and Music equipment'
    ? localStorage.setItem('subcatID', 54)
    : ''
  selected === 'Computer Accessories'
    ? localStorage.setItem('subcatID', 55)
    : ''
  selected === 'Electrical equipment'
    ? localStorage.setItem('subcatID', 56)
    : ''
  selected === 'Electronics' ? localStorage.setItem('subcatID', 57) : ''
  selected === 'Electronics Accessories'
    ? localStorage.setItem('subcatID', 58)
    : ''
  selected === 'HeadPhones' ? localStorage.setItem('subcatID', 59) : ''
  selected === 'Kitchen Appliances' ? localStorage.setItem('subcatID', 60) : ''
  selected === 'Photos and video cameras'
    ? localStorage.setItem('subcatID', 61)
    : ''
  selected === 'Tv and DVD equipment'
    ? localStorage.setItem('subcatID', 62)
    : ''
  selected === 'Videogames and Accessories'
    ? localStorage.setItem('subcatID', 63)
    : ''
  selected === 'printers scanners' ? localStorage.setItem('subcatID', 64) : ''

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

export default AddElectronicSub
