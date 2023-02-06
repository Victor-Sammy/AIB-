import React, { useState } from 'react'
import { useEffect } from 'react'
import '../../sass/components/_subCatOpt.scss'
import Animals from './animals/Animals'

const AnimalsOpt = () => {
  const animals = localStorage.getItem('subCategory')
    ? localStorage.getItem('subCategory')
    : 'no-subCategory'

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

  /*const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    localStorage.setItem('subCategory', e.target.value)
    setAnimals(e.target.value)
  }*/

  return (
    <div className='sub-opt'>
      <div className='subCat-opt'>
        <select
          className='subcat-select'
          value={animals}
          //onChange={handleChange}
        >
          <option value='subCategory'>Select Animals</option>
          <option value='dog'>Dog</option>
          <option value='cat'>Cat</option>
          <option value='monkey'>Monkey</option>
          <option value='petAccessories'>Pet Accessories</option>
          <option value='otherAnimals'>Other Animals</option>
        </select>
      </div>
      <div>{dogs && <Animals />}</div>
      <div>{cat && <Animals />}</div>
      <div>{monkey && <Animals />}</div>
      <div>{petAccessories && <Animals />}</div>
      <div>{otherAnimals && <Animals />}</div>
    </div>
  )
}

export default AnimalsOpt
