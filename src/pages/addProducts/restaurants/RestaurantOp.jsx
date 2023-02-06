import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import '../../../sass/components/_subCatOpt.scss'

const RestaurantOp = () => {
  const restaurants = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

  const [eateriesRestaurants, setEateriesRestaurants] = useState(false)
  const [bakeries, setBakeries] = useState(false)
  const [farmMachinery, setFarmMachinery] = useState(false)
  const [feeds, setFeeds] = useState(false)
  const [drinks, setDrinks] = useState(false)
  const [livestockPoultry, setLivestockPoultry] = useState(false)

  useEffect(() => {
    restaurants === 'eateriesRestaurants'
      ? setEateriesRestaurants(true)
      : setEateriesRestaurants(false)
    restaurants === 'bakeries' ? setBakeries(true) : setBakeries(false)
    restaurants === 'farmMachinery'
      ? setFarmMachinery(true)
      : setFarmMachinery(false)
    restaurants === 'feeds' ? setFeeds(true) : setFeeds(false)
    restaurants === 'drinks' ? setDrinks(true) : setDrinks(false)
    restaurants === 'livestockPoultry'
      ? setLivestockPoultry(true)
      : setLivestockPoultry(false)
  }, [restaurants])

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select className='subcat-select' value={restaurants}>
          <option value='selectRestaurants'>Select more Options</option>
          <option value='eateriesRestaurants'>Eateries & Restaurants</option>
          <option value='bakeries'>Bakeries</option>
          <option value='farmMachinery'>Farm Machinery & Equipment</option>
          <option value='feeds'>Feeds, Supplements & Seeds</option>
          <option value='livestockPoultry'>Livestocks & Poultry</option>
          <option value='drinks'>Drinks</option>
        </select>
      </div>
      <div>{eateriesRestaurants && <Restaurant />}</div>
      <div>{bakeries && <Restaurant />}</div>
      <div>{farmMachinery && <Restaurant />}</div>
      <div>{feeds && <Restaurant />}</div>
      <div>{livestockPoultry && <Restaurant />}</div>
      <div>{drinks && <Restaurant />}</div>
    </div>
  )
}

export default RestaurantOp
