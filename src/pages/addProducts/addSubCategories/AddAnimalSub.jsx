import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import '../.././../sass/components/_subCatOpt.scss'
import { NavLink } from 'react-router-dom'

const AddAnimalSub = () => {
  const [animals, setAnimals] = useState('selectAnimals')

  const [dogs, setDogs] = useState(false)
  const [cat, setCat] = useState(false)
  const [monkey, setMonkey] = useState(false)
  const [petAccessories, setPetAccessories] = useState(false)
  const [otherAnimals, setOtherAnimals] = useState(false)

  useEffect(() => {
    animals === 'dog' ? setDogs(true) : setDogs(false)
    animals === 'cat' ? setCat(true) : setCat(false)
    animals === 'monkey' ? setMonkey(true) : setMonkey(false)
    animals === 'petAccessories'
      ? setPetAccessories(true)
      : setPetAccessories(false)
    animals === 'otherAnimals' ? setOtherAnimals(true) : setOtherAnimals(false)
  }, [animals])

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setAnimals(e.target.value)
  }

  return (
    <div className='sub-opt2'>
      <div className='subCat-opt2'>
        <select
          className='subcat-select2'
          value={animals}
          onChange={handleChange}
        >
          <option value='selectAnimals'>Select Animals</option>
          <option value='dog'>Dog</option>
          <option value='cat'>Cat</option>
          <option value='monkey'>Monkey</option>
          <option value='petAccessories'>Pet Accessories</option>
          <option value='otherAnimals'>Other Animals</option>
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

export default AddAnimalSub
