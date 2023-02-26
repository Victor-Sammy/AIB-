import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const SportsOpt = () => {
  const [sports, setSports] = useState('selectSports')

  const [sportAccessories, setSportAccessories] = useState(false)
  const [campingGear, setCampingGear] = useState(false)
  const [sportEquipments, setSportEquipments] = useState(false)

  useEffect(() => {
    sports === 'sportAccessories'
      ? setSportAccessories(true)
      : setSportAccessories(false)
    sports === 'campingGear' ? setCampingGear(true) : setCampingGear(false)
    sports === 'sportEquipments'
      ? setSportEquipments(true)
      : setSportEquipments(false)
  }, [sports])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setSports(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={sports}
          onChange={handleChange}
        >
          <option value='selectSports'>Select for Sports</option>
          <option value='sportAccessories'>Sports Accessories</option>
          <option value='campingGear'>Camping Gear</option>
          <option value='sportEquipments'>Sports Equipments</option>
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

export default SportsOpt
