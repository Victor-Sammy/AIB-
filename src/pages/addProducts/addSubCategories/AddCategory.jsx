import React, { useEffect, useState } from 'react'
import '../../../sass/pages/addCategory.scss'

import CarsOpt from '../CarsOpt'
import CommEquipOpt from '../CommEquipOpt'
import FashionOpt from '../FashionOpt'
import FurnitureOpt from '../FurnitureOpt'
import HealthOpt from '../HealthOpt'
import HousesOpt from '../HousesOpt'
import Kids from '../Kids'
import MusicArtOpt from '../MusicArtOpt'
import PhonesTabOpt from '../PhonesTabOpt'
import Restaurantsopt from '../RestaurantsOpt'
import ServicesOpt from '../ServicesOpt'
import SportsOpt from '../SportsOpt'
import AddAnimalSub from './AddAnimalSub'
import AddElectronicSub from './AddElectronicSub'

const AddCategory = () => {
  const [category, setCategory] = useState('selectCategory')

  const [fashionContentVisible, setFashionContentVisible] = useState(false)
  const [animalsContentVisible, setAnimalsContentVisible] = useState(false)
  const [electronicsContentVisible, setElectronicsContentVisible] =
    useState(false)
  const [commercialEquipContentVisible, setCommercialEquipContentVisible] =
    useState(false)
  const [carsContentVisible, setCarsContentVisible] = useState(false)
  const [furnitureContentVisible, setFurnitureContentVisible] = useState(false)
  const [phonesContentVisible, setPhonesContentVisible] = useState(false)
  const [sportItemsContentVisible, setSportItemsContentVisible] =
    useState(false)
  const [restauantsContentVisible, setRestauantsContentVisible] =
    useState(false)
  const [musicContentVisible, setMusicContentVisible] = useState(false)
  const [kidsContentVisible, setKidsContentVisible] = useState(false)
  const [healthContentVisible, setHealthContentVisible] = useState(false)
  const [housingPropertyContentVisible, setHousingPropertyContentVisible] =
    useState(false)
  const [jobsServicesContentVisible, setJobsServicesContentVisible] =
    useState(false)

  useEffect(() => {
    category === 'fashion'
      ? setFashionContentVisible(true)
      : setFashionContentVisible(false)
    category === 'animals'
      ? setAnimalsContentVisible(true)
      : setAnimalsContentVisible(false)
    category === 'electronics'
      ? setElectronicsContentVisible(true)
      : setElectronicsContentVisible(false)
    category === 'commercialEquip'
      ? setCommercialEquipContentVisible(true)
      : setCommercialEquipContentVisible(false)
    category === 'cars'
      ? setCarsContentVisible(true)
      : setCarsContentVisible(false)
    category === 'furniture'
      ? setFurnitureContentVisible(true)
      : setFurnitureContentVisible(false)
    category === 'phones'
      ? setPhonesContentVisible(true)
      : setPhonesContentVisible(false)
    category === 'housing'
      ? setHousingPropertyContentVisible(true)
      : setHousingPropertyContentVisible(false)
    category === 'sports'
      ? setSportItemsContentVisible(true)
      : setSportItemsContentVisible(false)
    category === 'restaurant'
      ? setRestauantsContentVisible(true)
      : setRestauantsContentVisible(false)
    category === 'music'
      ? setMusicContentVisible(true)
      : setMusicContentVisible(false)
    category === 'kids'
      ? setKidsContentVisible(true)
      : setKidsContentVisible(false)
    category === 'health'
      ? setHealthContentVisible(true)
      : setHealthContentVisible(false)
    category === 'services'
      ? setJobsServicesContentVisible(true)
      : setJobsServicesContentVisible(false)
  }, [category])

  const handleOnChange = (e) => {
    localStorage.setItem('category', e.target.value)
    setCategory(e.target.value)
  }

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const renderResult = () => {
    let result
    category === 'selectCategory'
      ? (result = 'select Category')
      : (result = makeFirstLetterCapital(category))
    return result
  }
  return (
    <section className='addCategory'>
      <div className='ap-category2' id='ap-category2'>
        <h1>Category: {renderResult()}</h1>
        <select
          className='cat-select2'
          value={category}
          onChange={handleOnChange}
        >
          <option disabled value='selectCategory'>
            Select Category
          </option>
          <option value='fashion'>Fashion</option>
          <option value='animals'>Animals</option>
          <option value='electronics'>Electronics</option>
          <option value='commercialEquip'>Commercial Equip. & Tools</option>
          <option value='cars'>Cars & Automobiles</option>
          <option value='furniture'>Furniture</option>
          <option value='phones'>Phones & Tablets</option>
          <option value='sports'>Sport Items</option>
          <option value='restaurant'>Restaurants, Food & Agriculture</option>
          <option value='kids'>Kids & Babies world</option>
          <option value='music'>Music</option>
          <option value='housing'>Hotels, Housing & Property</option>
          <option value='health'>Health and Beauty</option>
          <option value='services'>Jobs, Handwork, services and cvs</option>
        </select>
      </div>
      <div>
        {fashionContentVisible && <FashionOpt />}
        {animalsContentVisible && <AddAnimalSub />}
        {electronicsContentVisible && <AddElectronicSub />}
        {commercialEquipContentVisible && <CommEquipOpt />}
        {carsContentVisible && <CarsOpt />}
        {furnitureContentVisible && <FurnitureOpt />}
        {phonesContentVisible && <PhonesTabOpt />}
        {sportItemsContentVisible && <SportsOpt />}
        {housingPropertyContentVisible && <HousesOpt />}
        {restauantsContentVisible && <Restaurantsopt />}
        {musicContentVisible && <MusicArtOpt />}
        {kidsContentVisible && <Kids />}
        {healthContentVisible && <HealthOpt />}
        {jobsServicesContentVisible && <ServicesOpt />}
      </div>
    </section>
  )
}

export default AddCategory
