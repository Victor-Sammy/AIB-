import React, { useEffect, useState } from 'react'
import HealthInput from './HealthInput'

const HealthOp = () => {
  const health = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={health}>
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
      <div>{bathBody && <HealthInput />}</div>
      <div>{fragrances && <HealthInput />}</div>
      <div>{hairBeauty && <HealthInput />}</div>
      <div>{makeUp && <HealthInput />}</div>
      <div>{wellness && <HealthInput />}</div>
      <div>{skincare && <HealthInput />}</div>
      <div>{tobacco && <HealthInput />}</div>
      <div>{toolsAccessories && <HealthInput />}</div>
      <div>{supplements && <HealthInput />}</div>
    </div>
  )
}

export default HealthOp
