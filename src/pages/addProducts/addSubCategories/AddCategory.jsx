import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
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
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)

  const options = [
    'Fashion',
    'Electronics',
    'Commercial equipments and tools',
    'Animals and Pets',
    'Cars and Autumobiles',
    'Home, Furnitures and appliances',
    'Health and Beauty',
    'Phones and Tablets',
    'Hotels, Houses and Property',
    'Kids and Babies world',
    'Music',
    'Resturants, food and Agriculture',
    'Sport Items',
    'jobs, Handwork, services and cvs',
  ]

  selected === 'Fashion' ? localStorage.setItem('categoryID', 10) : ''
  selected === 'Electronics' ? localStorage.setItem('categoryID', 11) : ''
  selected === 'Commercial equipments and tools'
    ? localStorage.setItem('categoryID', 12)
    : ''
  selected === 'Animals and Pets' ? localStorage.setItem('categoryID', 14) : ''
  selected === 'Cars and Autumobiles'
    ? localStorage.setItem('categoryID', 13)
    : ''
  selected === 'Home, Furnitures and appliances'
    ? localStorage.setItem('categoryID', 8)
    : ''
  selected === 'Health and Beauty' ? localStorage.setItem('categoryID', 9) : ''
  selected === 'Phones and Tablets' ? localStorage.setItem('categoryID', 4) : ''
  selected === 'Hotels, Houses and Property'
    ? localStorage.setItem('categoryID', 7)
    : ''
  selected === 'Kids and Babies world'
    ? localStorage.setItem('categoryID', 6)
    : ''
  selected === 'Music' ? localStorage.setItem('categoryID', 5) : ''
  selected === 'Resturants, food and Agriculture'
    ? localStorage.setItem('categoryID', 3)
    : ''
  selected === 'Sport Items' ? localStorage.setItem('categoryID', 2) : ''
  selected === 'jobs, Handwork, services and cvs'
    ? localStorage.setItem('categoryID', 1)
    : ''

  return (
    <section className='addCategory'>
      <div className='ap-category2' id='ap-category2'>
        <h1>
          <span className='head-title'>Choose a Category</span> <br /> <br />
          Category <span style={{ color: '#fe7702' }}>{selected}</span>
        </h1>
      </div>
      <div style={{ zIndex: 2 }} className='dropdown' id='dropdown'>
        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <span>
            {' '}
            <AiOutlineCaretDown />
          </span>
        </div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option)
                  setIsActive(false)
                  localStorage.setItem('category', option)
                }}
                className='dropdown-item'
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {selected === 'Fashion' && <FashionOpt />}
        {selected === 'Electronics' && <AddElectronicSub />}
        {selected === 'Commercial equipments and tools' && <CommEquipOpt />}
        {selected === 'Animals and Pets' && <AddAnimalSub />}
        {selected === 'Cars and Autumobiles' && <CarsOpt />}
        {selected === 'Home, Furnitures and appliances' && <FurnitureOpt />}
        {selected === 'Health and Beauty' && <HealthOpt />}
        {selected === 'Phones and Tablets' && <PhonesTabOpt />}
        {selected === 'Hotels, Houses and Property' && <HousesOpt />}
        {selected === 'Kids and Babies world' && <Kids />}
        {selected === 'Music' && <MusicArtOpt />}
        {selected === 'Resturants, food and Agriculture' && <Restaurantsopt />}
        {selected === 'Sport Items' && <SportsOpt />}
        {selected === 'jobs, Handwork, services and cvs' && <ServicesOpt />}
      </div>
    </section>
  )
}

export default AddCategory
