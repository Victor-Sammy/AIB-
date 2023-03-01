import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const HealthOpt = () => {
  const [health, setHealth] = useState('makeSelection')

  const [bathBody, setBathBody] = useState(false)
  const [fragrances, setFragrances] = useState(false)
  const [hairBeauty, setHairBeauty] = useState(false)
  const [makeUp, setMakeUp] = useState(false)
  const [wellness, setWellness] = useState(false)
  const [skincare, setSkincare] = useState(false)
  const [tobacco, setTobacco] = useState(false)
  const [toolsAccessories, setToolsAccessories] = useState(false)
  const [supplements, setSupplements] = useState(false)

  useEffect(() => {
    health === 'Bath & Body' ? setBathBody(true) : setBathBody(false)
    health === 'Fragrances' ? setFragrances(true) : setFragrances(false)
    health === 'Hair Beauty' ? setHairBeauty(true) : setHairBeauty(false)
    health === 'Make-Up' ? setMakeUp(true) : setMakeUp(false)
    health === 'Sexual Wellness' ? setWellness(true) : setWellness(false)
    health === 'Skincare' ? setSkincare(true) : setSkincare(false)
    health === 'Tobacco Accessories' ? setTobacco(true) : setTobacco(false)
    health === 'Tools & Accessories'
      ? setToolsAccessories(true)
      : setToolsAccessories(false)
    health === 'Vitamins & Supplements'
      ? setSupplements(true)
      : setSupplements(false)
  }, [health])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setHealth(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={health}
          onChange={handleChange}
        >
          <option value='makeSelection'>Select an Option</option>
          <option value='Bath & Body'>Bath & Body</option>
          <option value='Fragrances'>Fragrances</option>
          <option value='Hair Beauty'>Hair Beauty</option>
          <option value='Make-Up'>Make-Up</option>
          <option value='Sexual Wellness'>Sexual Wellness</option>
          <option value='Skincare'>Skincare</option>
          <option value='Tobacco Accessories'>Tobacco Accessories</option>
          <option value='Tools & Accessories'>Tools & Accessories</option>
          <option value='Vitamins & Supplements'>Vitamins & Supplements</option>
        </select>
      </div>
      <div>
        <NavLink to='/addProduct'>
          <div className='next-btn'>
            <GrFormNextLink />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default HealthOpt
