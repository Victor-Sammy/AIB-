import React, { useEffect, useState } from 'react'
import '../../sass/components/_subCatOpt.scss'
import { GrFormNextLink } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const FashionOpt = () => {
  const [fashion, setFashion] = useState('selectFashion')

  const [men, setMen] = useState(false)
  const [women, setWomen] = useState(false)
  const [bags, setBags] = useState(false)
  const [clothingAccessories, setClothingAccessories] = useState(false)
  const [shoes, setShoes] = useState(false)
  const [watches, setWatches] = useState(false)
  const [weddingWears, setWeddingWears] = useState(false)

  useEffect(() => {
    fashion === 'Mens fashion' ? setMen(true) : setMen(false)
    fashion === 'Womens fashion' ? setWomen(true) : setWomen(false)
    fashion === 'Bags' ? setBags(true) : setBags(false)
    fashion === 'clothing Accessories'
      ? setClothingAccessories(true)
      : setClothingAccessories(false)
    fashion === 'Shoes' ? setShoes(true) : setShoes(false)
    fashion === 'Watches' ? setWatches(true) : setWatches(false)
    fashion === 'wedding wears' ? setWeddingWears(true) : setWeddingWears(false)
  }, [fashion])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setFashion(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={fashion}
          onChange={handleChange}
        >
          <option value='selectFashon'>Choose Fashion</option>
          <option value='Mens fashion'>Men's Fashion</option>
          <option value='Womens fashion'>Women's Fashion</option>
          <option value='Bags'>Bags</option>
          <option value='clothing Accessories'>Clothing Accessories</option>
          <option value='Shoes'>Shoes</option>
          <option value='Watches'>Watches</option>
          <option value='wedding wears'>Wedding Wears</option>
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

export default FashionOpt
