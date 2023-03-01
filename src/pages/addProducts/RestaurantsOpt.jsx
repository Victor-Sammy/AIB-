import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const Restaurantsopt = () => {
  const [restaurants, setRestaurants] = useState('selectRestaurants')

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

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setRestaurants(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={restaurants}
          onChange={handleChange}
        >
          <option value='selectRestaurants'>Select more Options</option>
          <option value='eateriesRestaurants'>Eateries & Restaurants</option>
          <option value='bakeries'>Bakeries</option>
          <option value='farmMachinery'>Farm Machinery & Equipment</option>
          <option value='feeds'>Feeds, Supplements & Seeds</option>
          <option value='livestockPoultry'>Livestocks & Poultry</option>
          <option value='drinks'>Drinks</option>
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

export default Restaurantsopt
