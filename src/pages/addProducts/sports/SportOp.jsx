import React, { useEffect, useState } from 'react'
import SportsInput from './SportsInput'
import '../../../sass/components/_subCatOpt.scss'

const SportOp = () => {
  const sports = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={sports}>
          <option value='selectSports'>Select for Sports</option>
          <option value='sportAccessories'>Sports Accessories</option>
          <option value='campingGear'>Camping Gear</option>
          <option value='sportEquipments'>Sports Equipments</option>
        </select>
      </div>
      <div>{sportAccessories && <SportsInput />}</div>
      <div>{campingGear && <SportsInput />}</div>
      <div>{sportEquipments && <SportsInput />}</div>
    </div>
  )
}

export default SportOp
