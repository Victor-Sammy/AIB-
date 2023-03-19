import React, { useState } from 'react'
import '../../sass/pages/_addProduct.scss'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Fashion from './fashion/Fashion'
import HealthInput from './health/HealthInput'
import FurnitureInput from './furnitureAppliances/FurnitureInput'
import HousingInput from './housing/HousingInput'
import MusicArtInput from './music/MusicArtInput'
import PhoneTabInput from './phoneTab/PhoneTabInput'
import Restaurant from './restaurants/Restaurant'
import SportsInput from './sports/SportsInput'
import ServicesInput from './servicess/ServicesInput'
import KidsInput from './kids/KidsInput'
import ElectronicsInput from './electronics/ElectronicsInput'
import CommInput from './commEquip/CommInput'
import Car from './cars/Car'
import Animals from './animals/Animals'

const AddProduct = () => {
  const category = localStorage.getItem('category')
    ? localStorage.getItem('category')
    : 'no-subCategory'

  return (
    <section className='addProduct' id='addProduct'>
      <NavLink to='/addCategory'>
        <div className='ap-back' id='ap-back'>
          <BsFillArrowLeftSquareFill />
        </div>
      </NavLink>
      <h1 className='ap-title'>Add a new Product</h1>
      <p>Fill your product details below</p>
      <div>
        {category === 'Fashion' && <Fashion />}
        {category === 'Health and Beauty' && <HealthInput />}
        {category === 'Home, Furnitures and appliances' && <FurnitureInput />}
        {category === 'Hotels, Houses and Property' && <HousingInput />}
        {category === 'Kids and Babies world' && <KidsInput />}
        {category === 'Music' && <MusicArtInput />}
        {category === 'Phones and Tablets' && <PhoneTabInput />}
        {category === 'Resturants, food and Agriculture' && <Restaurant />}
        {category === 'Sport Items' && <SportsInput />}
        {category === 'jobs, Handwork, services and cvs' && <ServicesInput />}
        {category === 'Electronics' && <ElectronicsInput />}
        {category === 'Commercial equipments and tools' && <CommInput />}
        {category === 'Cars and Autumobiles' && <Car />}
        {category === 'Animals and Pets' && <Animals />}
      </div>
    </section>
  )
}

export default AddProduct
