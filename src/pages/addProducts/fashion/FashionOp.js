import React, { useEffect, useState } from 'react'
import Fashion from './Fashion'

const FashionOp = () => {
  const fashion = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={fashion}>
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
      <div>{men && <Fashion />}</div>
      <div>{women && <Fashion />}</div>
      <div>{bags && <Fashion />}</div>
      <div>{clothingAccessories && <Fashion />}</div>
      <div>{shoes && <Fashion />}</div>
      <div>{watches && <Fashion />}</div>
      <div>{weddingWears && <Fashion />}</div>
    </div>
  )
}

export default FashionOp
