import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'

const CommEquipOpt = () => {
  const [commercialEquip, setCommercialEquip] = useState('selectCommEquip')

  const [industrialOvens, setIndustrialOvens] = useState(false)
  const [manufacturingEquip, setManufacturingEquip] = useState(false)
  const [manufacturingMaterials, setManufacturingMaterials] = useState(false)
  const [medicalSupplies, setMedicalSupplies] = useState(false)
  const [printingEquipment, setPrintingEquipment] = useState(false)
  const [restaurant, setRestaurant] = useState(false)
  const [safetyWear, setSafetyWear] = useState(false)
  const [salonEquipment, setSalonEquipment] = useState(false)
  const [stage, setStage] = useState(false)
  const [stationery, setStationery] = useState(false)
  const [storeEquipment, setStoreEquipment] = useState(false)

  useEffect(() => {
    commercialEquip === 'industrialOvens'
      ? setIndustrialOvens(true)
      : setIndustrialOvens(false)
    commercialEquip === 'manufacturingEquip'
      ? setManufacturingEquip(true)
      : setManufacturingEquip(false)
    commercialEquip === 'manufacturingMaterials'
      ? setManufacturingMaterials(true)
      : setManufacturingMaterials(false)
    commercialEquip === 'medicalSupplies'
      ? setMedicalSupplies(true)
      : setMedicalSupplies(false)
    commercialEquip === 'printingEquipment'
      ? setPrintingEquipment(true)
      : setPrintingEquipment(false)
    commercialEquip === 'restaurant'
      ? setRestaurant(true)
      : setRestaurant(false)
    commercialEquip === 'safetyWear'
      ? setSafetyWear(true)
      : setSafetyWear(false)
    commercialEquip === 'salonEquipment'
      ? setSalonEquipment(true)
      : setSalonEquipment(false)
    commercialEquip === 'stage' ? setStage(true) : setStage(false)
    commercialEquip === 'stationery'
      ? setStationery(true)
      : setStationery(false)
    commercialEquip === 'storeEquipment'
      ? setStoreEquipment(true)
      : setStoreEquipment(false)
  }, [commercialEquip])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setCommercialEquip(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={commercialEquip}
          onChange={handleChange}
        >
          <option value='selectCommEquip'>Select Commercial Equipment</option>
          <option value='industrialOvens'>Industrial Ovens</option>
          <option value='manufacturingEquip'>Manufacturing Equipment</option>
          <option value='manufacturingMaterials'>
            Manufacturing Materials
          </option>
          <option value='medicalSupplies'>Medical Supplies & Equipment</option>
          <option value='printingEquipment'>Printing Equipment</option>
          <option value='restaurant'>Restaurant & Catering Equipment</option>
          <option value='safetyWear'>Safetywear & Equipment</option>
          <option value='salonEquipment'>Salon Equipment</option>
          <option value='stage'>Stage Lighting & Effects</option>
          <option value='stationery'>Stationery</option>
          <option value='storeEquipment'>Store Equipment</option>
        </select>
      </div>
    </div>
  )
}

export default CommEquipOpt
