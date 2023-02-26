import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const FurnitureOpt = () => {
  const [furnitureAppliances, setFurnitureAppliances] =
    useState('selectFurniture')

  const [furniture, setFurniture] = useState(false)
  const [homeAppliances, setHomeAppliances] = useState(false)
  const [kitchenAppliances, setKitchenAppliances] = useState(false)
  const [kitchenWare, setKitchenWare] = useState(false)
  const [gardening, setGardening] = useState(false)

  useEffect(() => {
    furnitureAppliances === 'furniture'
      ? setFurniture(true)
      : setFurniture(false)
    furnitureAppliances === 'homeAppliances'
      ? setHomeAppliances(true)
      : setHomeAppliances(false)
    furnitureAppliances === 'kitchenAppliances'
      ? setKitchenAppliances(true)
      : setKitchenAppliances(false)
    furnitureAppliances === 'kitchenWare'
      ? setKitchenWare(true)
      : setKitchenWare(false)
    furnitureAppliances === 'gardening'
      ? setGardening(true)
      : setGardening(false)
  }, [furnitureAppliances])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setFurnitureAppliances(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={furnitureAppliances}
          onChange={handleChange}
        >
          <option value='selectFurniture'>
            Select Furniture & Home Appliances
          </option>
          <option value='furniture'>Furniture</option>
          <option value='homeAppliances'>Home Appliances</option>
          <option value='kitchenAppliances'>Kitchen Appliances</option>
          <option value='kitchenWare'>Kitchen Ware</option>
          <option value='gardening'>Gardening</option>
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

export default FurnitureOpt
