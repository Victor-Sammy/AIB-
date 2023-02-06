import React, { useEffect, useState } from 'react'
import '../../../sass/components/_subCatOpt.scss'
import KidsInput from './KidsInput'

const KidsOp = () => {
  const kids = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

  const [babiesAccessories, setBabiesAccessories] = useState(false)
  const [babyClothing, setBabyClothing] = useState(false)
  const [babyShoes, setbabyShoes] = useState(false)
  const [toys, setToys] = useState(false)
  const [cFurnitures, setCFurnitures] = useState(false)
  const [cCare, setCCare] = useState(false)
  const [babyStrollers, setBabyStrollers] = useState(false)

  useEffect(() => {
    kids === 'babiesAccessories'
      ? setBabiesAccessories(true)
      : setBabiesAccessories(false)
    kids === 'babyClothing' ? setBabyClothing(true) : setBabyClothing(false)
    kids === 'babyShoes' ? setbabyShoes(true) : setbabyShoes(false)
    kids === 'toys' ? setToys(true) : setToys(false)
    kids === 'cFurnitures' ? setCFurnitures(true) : setCFurnitures(false)
    kids === 'cCare' ? setCCare(true) : setCCare(false)
    kids === 'babyStrollers' ? setBabyStrollers(true) : setBabyStrollers(false)
  }, [kids])

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={kids}>
          <option value='selectKids'>make your selection</option>
          <option value='babiesAccessories'>Babies Accessories</option>
          <option value='babyClothing'>Children & Babies Clothing</option>
          <option value='babyShoes'>Children & Babies Shoes</option>
          <option value='toys'>Toys</option>
          <option value='cFurnitures'>Children Furniture</option>
          <option value='cCare'>Children & Babies Care</option>
          <option value='babyStrollers'>Baby Strollers</option>
        </select>
      </div>
      <div>{babiesAccessories && <KidsInput />}</div>
      <div>{babyClothing && <KidsInput />}</div>
      <div>{babyShoes}</div>
      <div>{toys && <KidsInput />}</div>
      <div>{cFurnitures && <KidsInput />}</div>
      <div>{cCare && <KidsInput />}</div>
      <div>{babyStrollers && <KidsInput />}</div>
    </div>
  )
}

export default KidsOp
