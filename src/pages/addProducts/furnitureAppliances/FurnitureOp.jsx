import React, { useEffect, useState } from 'react'
import FurnitureInput from './FurnitureInput'

const FurnitureOp = () => {
  const furnitureAppliances = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={furnitureAppliances}>
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
      <div>{furniture && <FurnitureInput />}</div>
      <div>{homeAppliances && <FurnitureInput />}</div>
      <div>{kitchenAppliances && <FurnitureInput />}</div>
      <div>{kitchenWare && <FurnitureInput />}</div>
      <div>{gardening && <FurnitureInput />}</div>
    </div>
  )
}

export default FurnitureOp
