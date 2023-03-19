import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import '../.././../sass/pages/addCategory.scss'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'

const AddAnimalSub = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = ['Birds', 'Cats', 'Dogs', 'Other Animals', 'Pet Accessories']

  selected === 'Birds' ? localStorage.setItem('subcatID', 79) : ''
  selected === 'Cats' ? localStorage.setItem('subcatID', 80) : ''
  selected === 'Dogs' ? localStorage.setItem('subcatID', 81) : ''
  selected === 'Other Animals' ? localStorage.setItem('subcatID', 82) : ''
  selected === 'Pet Accessories' ? localStorage.setItem('subcatID', 83) : ''

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

export default AddAnimalSub
