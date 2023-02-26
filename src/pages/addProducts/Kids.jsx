import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const Kids = () => {
  const [kids, setKids] = useState('selectKids')

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

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setKids(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select className='subcat-select2' value={kids} onChange={handleChange}>
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

export default Kids
