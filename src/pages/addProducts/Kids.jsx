import React, { useEffect, useState } from 'react'
import '../../sass/pages/addCategory.scss'
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { client } from '../../Api/Api'

const Kids = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    client.get('/ad/categories/6/subcategories/').then((response) => {
      console.log(response.data.results)
      setOptions(response.data.results)
    })
  }, [])

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
                  setSelected(option.name)
                  setIsActive(false)
                  localStorage.setItem('sub-cat', option.id)
                }}
                className='dropdown-item'
              >
                {option.name}
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
