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
import { useQuery } from '@tanstack/react-query'
import { client } from '../../../Api/Api'

const AddCategory = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [options, setOptions] = useState([])

  useEffect(() => {
    client.get('/ad/categories/').then((response) => {
      console.log(response.data)
      setIsLoading(false)
      setOptions(response.data)
    })
  }, [])

  return (
    <>
      {isLoading ? (
        <h1> ...loading </h1>
      ) : (
        <section className='addCategory'>
          <div className='ap-category2' id='ap-category2'>
            <h1>
              <span className='head-title'>Choose a Category</span> <br />{' '}
              <br />
              Category -- <span style={{ color: '#fe7702' }}>{selected}</span>
            </h1>
          </div>
          <div style={{ zIndex: 2 }} className='dropdown' id='dropdown'>
            <div
              className='dropdown-btn'
              onClick={(e) => setIsActive(!isActive)}
            >
              {selected}
              <span>
                {' '}
                <AiOutlineCaretDown />
              </span>
            </div>
            {isActive && (
              <div className='dropdown-content'>
                {options?.map((option) => (
                  <div
                    onClick={(e) => {
                      setSelected(option.name)
                      setIsActive(false)
                      localStorage.setItem('category-id', option.id)
                      localStorage.setItem('category', option.name)
                    }}
                    className='dropdown-item'
                  >
                    {option.name}
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
            {selected === 'Resturants, food and Agriculture' && (
              <Restaurantsopt />
            )}
            {selected === 'Sport Items' && <SportsOpt />}
            {selected === 'jobs, Handwork, services and cvs' && <ServicesOpt />}
          </div>
        </section>
      )}
    </>
  )
}

export default AddCategory
